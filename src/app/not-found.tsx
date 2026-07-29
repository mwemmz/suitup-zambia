import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="pt-32 pb-20 text-center">
      <h1 className="text-6xl md:text-8xl font-medium tracking-[-0.03em] text-charcoal-200 mb-6">404</h1>
      <h2 className="text-xl md:text-2xl font-medium mb-3">Page Not Found</h2>
      <p className="text-sm text-charcoal-500 mb-8 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button variant="primary" size="md" as="a" href="/">Return Home</Button>
    </Container>
  );
}
