"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container className="pt-24 md:pt-32 pb-20">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-medium tracking-[0.05em] mb-3">Create Account</h1>
          <p className="text-sm text-charcoal-500">Join the SuitUp Zambia experience</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs text-charcoal-600 mb-1.5">Full Name</label>
            <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
          </div>
          <div>
            <label htmlFor="reg-email" className="block text-xs text-charcoal-600 mb-1.5">Email</label>
            <input id="reg-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
          </div>
          <div>
            <label htmlFor="reg-password" className="block text-xs text-charcoal-600 mb-1.5">Password</label>
            <input id="reg-password" type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-xs text-charcoal-600 mb-1.5">Confirm Password</label>
            <input id="confirm-password" type="password" required value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
          </div>
          <Button variant="primary" size="lg" className="w-full" type="submit">Create Account</Button>
        </form>

        <p className="text-center text-xs text-charcoal-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-charcoal-950 font-medium hover:underline underline-offset-2">Sign in</Link>
        </p>
      </div>
    </Container>
  );
}
