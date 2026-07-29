import { Container } from "@/components/ui/Container";
import { Skeleton, ProductCardSkeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <Container className="pt-24 md:pt-32 pb-20">
      <Skeleton className="h-10 w-64 mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}
