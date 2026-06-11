"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  end,
}: {
  end: number;
}) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const timer = setInterval(() => {
      current += 1;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 120);

    return () => clearInterval(timer);
  }, [end, start]);

  return <span ref={ref}>{count}</span>;
}