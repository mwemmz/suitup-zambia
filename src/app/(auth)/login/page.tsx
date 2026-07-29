"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container className="pt-24 md:pt-32 pb-20">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-medium tracking-[0.05em] mb-3">Welcome Back</h1>
          <p className="text-sm text-charcoal-500">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs text-charcoal-600 mb-1.5">Email</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs text-charcoal-600 mb-1.5">Password</label>
            <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
          </div>
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="accent-wine-950" /> Remember me
            </label>
            <Link href="/forgot-password" className="text-charcoal-500 hover:text-charcoal-950 underline underline-offset-2">Forgot password?</Link>
          </div>
          <Button variant="primary" size="lg" className="w-full" type="submit">Sign In</Button>
        </form>

        <p className="text-center text-xs text-charcoal-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-charcoal-950 font-medium hover:underline underline-offset-2">Create one</Link>
        </p>
      </div>
    </Container>
  );
}
