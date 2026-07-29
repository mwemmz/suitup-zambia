import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  aspectRatio?: string;
}

export function Skeleton({ className, aspectRatio }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-charcoal-800 rounded-sm",
        aspectRatio && `aspect-[${aspectRatio}]`,
        className
      )}
      aria-hidden="true"
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton aspectRatio="3/4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
