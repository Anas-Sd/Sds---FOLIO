import { useState, useEffect, useRef } from "react";

const API_BASE = "https://api.counterapi.dev/v1/anas_sd_portfolio_2026";

export const useGlobalStats = () => {
  // Read local cache or default to live baseline (85 views, 16 downloads)
  const [viewsCount, setViewsCount] = useState(() => {
    const cached = localStorage.getItem("anas_portfolio_views_synced");
    return cached ? Math.max(parseInt(cached, 10), 85) : 85;
  });

  const [downloadsCount, setDownloadsCount] = useState(() => {
    const cached = localStorage.getItem("anas_portfolio_downloads_synced");
    return cached ? Math.max(parseInt(cached, 10), 16) : 16;
  });

  const hasIncrementedRef = useRef(false);

  useEffect(() => {
    if (hasIncrementedRef.current) return;
    hasIncrementedRef.current = true;

    let isMounted = true;

    // 1. Instant local increment on refresh (0ms delay)
    setViewsCount((prev) => {
      const next = prev + 1;
      localStorage.setItem("anas_portfolio_views_synced", next.toString());
      return next;
    });

    // 2. Background cloud API sync
    const syncCloudStats = async () => {
      try {
        const [viewsRes, downloadsRes] = await Promise.allSettled([
          fetch(`${API_BASE}/views/up`).then((r) => r.json()),
          fetch(`${API_BASE}/downloads`).then((r) => r.json()),
        ]);

        if (isMounted) {
          if (viewsRes.status === "fulfilled" && typeof viewsRes.value?.count === "number") {
            const cloudViews = viewsRes.value.count;
            setViewsCount((prev) => {
              const maxVal = Math.max(prev, cloudViews);
              localStorage.setItem("anas_portfolio_views_synced", maxVal.toString());
              return maxVal;
            });
          }

          if (downloadsRes.status === "fulfilled" && typeof downloadsRes.value?.count === "number") {
            const cloudDownloads = downloadsRes.value.count;
            setDownloadsCount((prev) => {
              const maxVal = Math.max(prev, cloudDownloads);
              localStorage.setItem("anas_portfolio_downloads_synced", maxVal.toString());
              return maxVal;
            });
          }
        }
      } catch (err) {
        console.error("Cloud sync error:", err);
      }
    };

    syncCloudStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const incrementDownloads = () => {
    // 1. Instant UI update (+1)
    setDownloadsCount((prev) => {
      const next = prev + 1;
      localStorage.setItem("anas_portfolio_downloads_synced", next.toString());
      return next;
    });

    // 2. Background cloud increment
    fetch(`${API_BASE}/downloads/up`)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data?.count === "number") {
          setDownloadsCount((prev) => {
            const maxVal = Math.max(prev, data.count);
            localStorage.setItem("anas_portfolio_downloads_synced", maxVal.toString());
            return maxVal;
          });
        }
      })
      .catch((err) => console.error("Error pushing download count to cloud:", err));
  };

  return {
    viewsCount,
    downloadsCount,
    incrementDownloads,
  };
};

export default useGlobalStats;
