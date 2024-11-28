"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function YandexMetrika() {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    const url = `${pathname}`;
    ym(99067508, "hit", url);
  }, [pathname]);

  return null;
}
