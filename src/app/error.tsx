"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="pt-32 pb-20 text-center">
      <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] mb-6">Something went wrong</h1>
      <p className="text-sm text-charcoal-500 mb-8 max-w-md mx-auto">
        An unexpected error occurred. Please try again.
      </p>
      <Button variant="primary" size="md" onClick={reset}>Try Again</Button>
    </Container>
  );
}
