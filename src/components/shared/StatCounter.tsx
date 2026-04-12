import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface StatCounterProps {
  value: string;
  label: string;
  danger?: boolean;
}

export function StatCounter({
  value,
  label,
  danger = false,
}: StatCounterProps) {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div
        className={`text-4xl font-bold font-mono mb-1 ${danger ? "text-forge-red" : "text-forge-orange"}`}
      >
        {value}
      </div>
      <div className="text-forge-slate text-sm">{label}</div>
    </motion.div>
  );
}
