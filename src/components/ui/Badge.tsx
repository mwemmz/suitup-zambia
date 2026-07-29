import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "new" | "sale";
  className?: string;
}

const styles = {
  default: "bg-night-700 text-charcoal-200 border border-charcoal-600",
  new: "bg-wine-700/30 text-wine-300 border border-wine-700/50",
  sale: "bg-wine-600/20 text-wine-200 border border-wine-600/40",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] font-mono",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
