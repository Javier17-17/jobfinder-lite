import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    if (!url) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(url, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });

      const body = await res.json();

      if (!res.ok) {
        throw new Error(body?.message || "Error al cargar datos");
      }

      setData(body);
    } catch (e) {
      setError(e.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}
