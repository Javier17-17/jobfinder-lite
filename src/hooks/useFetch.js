import { useEffect, useState } from "react";

/**
 * Hook para pedir datos a una URL.
 * Devuelve: { data, loading, error, refetch }
 */
export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState("");

  const fetchData = async () => {
    if (!url) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error("Error al cargar datos");
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError(e.message || "Error desconocido");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}
