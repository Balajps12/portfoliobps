"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({
  children,
  direction = "left",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) {
  const { scrollY } = useScroll();

  const x =
    direction === "left"
      ? useTransform(scrollY, [0, 1000], [0, -120])
      : useTransform(scrollY, [0, 1000], [0, 120]);

  return <motion.div style={{ x }}>{children}</motion.div>;
}