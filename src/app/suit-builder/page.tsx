import type { Metadata } from "next";
import { SuitBuilder } from "@/components/suit-builder/SuitBuilder";

export const metadata: Metadata = {
  title: "Suit Builder",
  description: "Design your bespoke suit. Choose fabric, style, fit, and details to create a garment that is unmistakably yours.",
};

export default function SuitBuilderPage() {
  return <SuitBuilder />;
}
