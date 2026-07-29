"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FABRICS, LAPEL_STYLES, FIT_STYLES } from "@/lib/constants";
import { formatPrice, cn } from "@/lib/utils";
import type { SuitBuilderState } from "@/lib/types";

const steps = [
  { id: "fabric", label: "Fabric", description: "Choose your material" },
  { id: "style", label: "Style", description: "Select lapel and details" },
  { id: "fit", label: "Fit", description: "Choose your silhouette" },
  { id: "details", label: "Details", description: "Buttons & pockets" },
  { id: "measure", label: "Measurements", description: "Your exact size" },
];

const BUTTON_STYLES = [
  { id: "1-button", name: "1 Button", description: "Modern & sleek" },
  { id: "2-button", name: "2 Buttons", description: "Classic standard" },
  { id: "3-button", name: "3 Buttons", description: "Traditional" },
];

const POCKET_STYLES = [
  { id: "flap", name: "Flap Pockets", description: "Classic & casual" },
  { id: "jetted", name: "Jetted Pockets", description: "Formal & clean" },
  { id: "patch", name: "Patch Pockets", description: "Relaxed & sporty" },
];

const TROUSER_STYLES = [
  { id: "slim", name: "Slim Trousers", description: "Tapered leg" },
  { id: "regular", name: "Regular Trousers", description: "Straight leg" },
  { id: "wide", name: "Wide Trousers", description: "Full leg" },
];

export function SuitBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [config, setConfig] = useState<SuitBuilderState>({
    fabric: "",
    lapel: "",
    buttons: "",
    pocket: "",
    fit: "",
    trousers: "",
    measurements: { chest: 40, waist: 34, hips: 40, shoulder: 18, armLength: 25, inseam: 30, neck: 16 },
  });
  const [isComplete, setIsComplete] = useState(false);

  const updateConfig = (key: keyof SuitBuilderState, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const fabricPrice = FABRICS.find((f) => f.id === config.fabric)?.price || 0;
  const basePrice = 6500;
  const totalPrice = basePrice + fabricPrice;

  const canProceed = () => {
    switch (currentStep) {
      case 0: return !!config.fabric;
      case 1: return !!config.lapel;
      case 2: return !!config.fit && !!config.trousers;
      case 3: return !!config.buttons && !!config.pocket;
      case 4: return true;
      default: return false;
    }
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleComplete();
    }
  };

  if (isComplete) {
    return (
      <div className="container-luxury pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="w-16 h-16 bg-wine-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-ivory" />
          </div>
          <h1 className="text-2xl md:text-3xl font-medium text-ivory mb-4">Your Suit is Being Crafted</h1>
          <p className="text-sm text-charcoal-300 mb-8">
            A member of our team will contact you within 24 hours to confirm your measurements and schedule your first fitting.
          </p>
          <div className="p-6 bg-charcoal-900 border border-charcoal-700 text-left space-y-2 mb-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-wine-400 font-mono">Configuration Summary</p>
            <p className="text-sm text-charcoal-200">Fabric: {FABRICS.find((f) => f.id === config.fabric)?.name}</p>
            <p className="text-sm text-charcoal-200">Lapel: {LAPEL_STYLES.find((l) => l.id === config.lapel)?.name}</p>
            <p className="text-sm text-charcoal-200">Fit: {FIT_STYLES.find((f) => f.id === config.fit)?.name}</p>
            <p className="text-sm text-ivory font-medium pt-2 border-t border-charcoal-700">
              Estimated Total: {formatPrice(totalPrice)}
            </p>
          </div>
          <Button variant="primary" size="md" as="a" href="/">
            Return Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container-luxury pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-medium text-ivory mb-3">Suit Builder</h1>
            <p className="text-sm text-charcoal-400">Design your bespoke suit, step by step.</p>
          </div>

          <div className="flex items-center justify-between mb-12 overflow-x-auto scrollbar-hide" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={steps.length}>
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => i <= currentStep && setCurrentStep(i)}
                  className={cn(
                    "flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase whitespace-nowrap transition-colors",
                    i === currentStep ? "text-ivory" : i < currentStep ? "text-wine-400" : "text-charcoal-500"
                  )}
                  disabled={i > currentStep}
                >
                  <span
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-xs border-2 transition-colors",
                      i === currentStep ? "bg-wine-600 text-ivory border-wine-600" : i < currentStep ? "bg-wine-700 text-wine-300 border-wine-600" : "border-charcoal-600 text-charcoal-500"
                    )}
                  >
                    {i < currentStep ? <Check size={12} /> : i + 1}
                  </span>
                  <span className="hidden sm:inline">{step.label}</span>
                </button>
                {i < steps.length - 1 && (
                  <div className={cn("w-8 md:w-16 h-px mx-2", i < currentStep ? "bg-wine-600" : "bg-night-700")} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {currentStep === 0 && (
                <div>
                  <h2 className="text-lg font-medium text-ivory mb-2">Select Your Fabric</h2>
                  <p className="text-sm text-charcoal-400 mb-8">Choose from our curated selection of premium materials.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {FABRICS.map((fabric) => (
                      <button
                        key={fabric.id}
                        onClick={() => updateConfig("fabric", fabric.id)}
                        className={cn(
                          "p-6 border-2 text-left transition-all duration-200",
                          config.fabric === fabric.id ? "border-wine-400 bg-charcoal-800" : "border-charcoal-700 hover:border-charcoal-500"
                        )}
                      >
                        <div className="w-full h-12 mb-4 rounded" style={{ backgroundColor: fabric.color }} />
                        <p className="text-sm font-medium text-ivory">{fabric.name}</p>
                        {fabric.price > 0 && <p className="text-xs text-charcoal-400 mt-1">+{formatPrice(fabric.price)}</p>}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div>
                  <h2 className="text-lg font-medium text-ivory mb-2">Choose Your Style</h2>
                  <p className="text-sm text-charcoal-400 mb-8">Select the lapel style that defines your look.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {LAPEL_STYLES.map((lapel) => (
                      <button
                        key={lapel.id}
                        onClick={() => updateConfig("lapel", lapel.id)}
                        className={cn(
                          "p-6 border-2 text-left transition-all duration-200",
                          config.lapel === lapel.id ? "border-wine-400 bg-charcoal-800" : "border-charcoal-700 hover:border-charcoal-500"
                        )}
                      >
                        <p className="text-sm font-medium text-ivory">{lapel.name}</p>
                        <p className="text-xs text-charcoal-400 mt-1">{lapel.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-medium text-ivory mb-2">Choose Your Fit</h2>
                    <p className="text-sm text-charcoal-400 mb-8">Select the silhouette that suits your style.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {FIT_STYLES.map((fit) => (
                        <button
                          key={fit.id}
                          onClick={() => updateConfig("fit", fit.id)}
                          className={cn(
                            "p-6 border-2 text-left transition-all duration-200",
                            config.fit === fit.id ? "border-wine-400 bg-charcoal-800" : "border-charcoal-700 hover:border-charcoal-500"
                          )}
                        >
                          <p className="text-sm font-medium text-ivory">{fit.name}</p>
                          <p className="text-xs text-charcoal-400 mt-1">{fit.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-ivory mb-2">Trouser Style</h2>
                    <p className="text-sm text-charcoal-400 mb-8">Choose your preferred trouser cut.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {TROUSER_STYLES.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => updateConfig("trousers", t.id)}
                          className={cn(
                            "p-6 border-2 text-left transition-all duration-200",
                            config.trousers === t.id ? "border-wine-400 bg-charcoal-800" : "border-charcoal-700 hover:border-charcoal-500"
                          )}
                        >
                          <p className="text-sm font-medium text-ivory">{t.name}</p>
                          <p className="text-xs text-charcoal-400 mt-1">{t.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-medium text-ivory mb-2">Button Configuration</h2>
                    <p className="text-sm text-charcoal-400 mb-8">Choose your button style.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {BUTTON_STYLES.map((b) => (
                        <button
                          key={b.id}
                          onClick={() => updateConfig("buttons", b.id)}
                          className={cn(
                            "p-6 border-2 text-left transition-all duration-200",
                            config.buttons === b.id ? "border-wine-400 bg-charcoal-800" : "border-charcoal-700 hover:border-charcoal-500"
                          )}
                        >
                          <p className="text-sm font-medium text-ivory">{b.name}</p>
                          <p className="text-xs text-charcoal-400 mt-1">{b.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-ivory mb-2">Pocket Style</h2>
                    <p className="text-sm text-charcoal-400 mb-8">Choose your preferred pocket style.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {POCKET_STYLES.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => updateConfig("pocket", p.id)}
                          className={cn(
                            "p-6 border-2 text-left transition-all duration-200",
                            config.pocket === p.id ? "border-wine-400 bg-charcoal-800" : "border-charcoal-700 hover:border-charcoal-500"
                          )}
                        >
                          <p className="text-sm font-medium text-ivory">{p.name}</p>
                          <p className="text-xs text-charcoal-400 mt-1">{p.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div>
                  <h2 className="text-lg font-medium text-ivory mb-2">Your Measurements</h2>
                  <p className="text-sm text-charcoal-400 mb-8">Provide your measurements for the perfect fit. A tailor will verify these during your first fitting.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg">
                    {[
                      { key: "chest" as const, label: "Chest (inches)", default: 40 },
                      { key: "waist" as const, label: "Waist (inches)", default: 34 },
                      { key: "hips" as const, label: "Hips (inches)", default: 40 },
                      { key: "shoulder" as const, label: "Shoulder (inches)", default: 18 },
                      { key: "armLength" as const, label: "Sleeve (inches)", default: 25 },
                      { key: "inseam" as const, label: "Inseam (inches)", default: 30 },
                      { key: "neck" as const, label: "Neck (inches)", default: 16 },
                    ].map((m) => (
                      <div key={m.key}>
                        <label htmlFor={m.key} className="block text-[10px] tracking-[0.15em] uppercase text-charcoal-400 mb-2">
                          {m.label}
                        </label>
                        <input
                          id={m.key}
                          type="number"
                          value={config.measurements[m.key]}
                          onChange={(e) =>
                            setConfig((prev) => ({
                              ...prev,
                              measurements: { ...prev.measurements, [m.key]: Number(e.target.value) },
                            }))
                          }
                          className="w-full px-4 py-3 border border-charcoal-600 bg-charcoal-900 text-ivory text-sm focus:outline-none focus:border-wine-400 transition-colors"
                          min={0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-charcoal-800">
            <div>
              <p className="text-xs text-charcoal-400">Estimated Total</p>
              <p className="text-lg font-medium text-ivory">{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex gap-3">
              {currentStep > 0 && (
                <Button variant="ghost" size="md" onClick={() => setCurrentStep((prev) => prev - 1)}>
                  <ChevronLeft size={14} className="mr-1" /> Back
                </Button>
              )}
              <Button
                variant="primary"
                size="md"
                onClick={handleNext}
                disabled={!canProceed()}
              >
                {currentStep < steps.length - 1 ? (
                  <>Next <ChevronRight size={14} className="ml-1" /></>
                ) : (
                  "Complete Order"
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
