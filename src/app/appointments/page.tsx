"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

export default function AppointmentsPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", type: "fitting", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container-luxury pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 bg-wine-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar size={24} className="text-ivory" />
          </div>
          <h1 className="text-2xl font-medium text-ivory mb-4">Appointment Confirmed</h1>
          <p className="text-sm text-charcoal-300 mb-2">We look forward to welcoming you.</p>
          <p className="text-xs text-charcoal-400 mb-8">{form.date} at {form.time}</p>
          <Button variant="primary" size="md" as="a" href="/">Return Home</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container-luxury pt-24 md:pt-32 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-medium text-ivory tracking-[-0.02em] mb-3">Book an Appointment</h1>
            <p className="text-sm text-charcoal-400">Visit our Lusaka atelier for a personalized consultation.</p>
          </div>

          <div className="mb-8 flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <span className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium",
                  step >= s ? "bg-wine-600 text-ivory" : "bg-charcoal-800 text-charcoal-500 border border-charcoal-600"
                )}>
                  {s}
                </span>
                <span className="text-xs text-charcoal-400 hidden sm:inline">{["Details", "Schedule", "Confirm"][s - 1]}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-charcoal-400 mb-1.5">Full Name</label>
                  <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-charcoal-600 bg-charcoal-900 text-ivory text-sm focus:outline-none focus:border-wine-400 transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-charcoal-400 mb-1.5">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-charcoal-600 bg-charcoal-900 text-ivory text-sm focus:outline-none focus:border-wine-400 transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs text-charcoal-400 mb-1.5">Phone</label>
                  <input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 border border-charcoal-600 bg-charcoal-900 text-ivory text-sm focus:outline-none focus:border-wine-400 transition-colors" />
                </div>
                <div>
                  <label htmlFor="type" className="block text-xs text-charcoal-400 mb-1.5">Appointment Type</label>
                  <select id="type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-4 py-3 border border-charcoal-600 bg-charcoal-900 text-ivory text-sm focus:outline-none focus:border-wine-400 transition-colors">
                    <option value="fitting">Bespoke Fitting</option>
                    <option value="consultation">Consultation</option>
                    <option value="alteration">Alteration</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div>
                  <label htmlFor="date" className="block text-xs text-charcoal-400 mb-1.5">Preferred Date</label>
                  <input id="date" type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 border border-charcoal-600 bg-charcoal-900 text-ivory text-sm focus:outline-none focus:border-wine-400 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-400 mb-3">Preferred Time</p>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button key={slot} type="button" onClick={() => setForm({ ...form, time: slot })}
                        className={cn(
                          "py-2.5 text-xs border transition-colors",
                          form.time === slot ? "bg-wine-600 text-ivory border-wine-600" : "border-charcoal-600 text-charcoal-300 hover:border-ivory"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="notes" className="block text-xs text-charcoal-400 mb-1.5">Notes (optional)</label>
                  <textarea id="notes" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-3 border border-charcoal-600 bg-charcoal-900 text-ivory text-sm focus:outline-none focus:border-wine-400 transition-colors resize-none" />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-charcoal-900 border border-charcoal-700 space-y-3">
                <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-ivory">Confirm Your Details</h2>
                <div className="text-sm space-y-2 text-charcoal-300">
                  <p><span className="text-charcoal-400">Name:</span> {form.name}</p>
                  <p><span className="text-charcoal-400">Email:</span> {form.email}</p>
                  <p><span className="text-charcoal-400">Phone:</span> {form.phone}</p>
                  <p><span className="text-charcoal-400">Type:</span> {form.type}</p>
                  <p><span className="text-charcoal-400">Date:</span> {form.date}</p>
                  <p><span className="text-charcoal-400">Time:</span> {form.time}</p>
                  {form.notes && <p><span className="text-charcoal-400">Notes:</span> {form.notes}</p>}
                </div>
              </motion.div>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 ? (
                <Button variant="ghost" size="md" type="button" onClick={() => setStep(step - 1)}>Back</Button>
              ) : <div />}
              {step < 3 ? (
                <Button variant="primary" size="md" type="button" onClick={() => step < 3 && setStep(step + 1)}>Continue</Button>
              ) : (
                <Button variant="primary" size="md" type="submit">Confirm Appointment</Button>
              )}
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-charcoal-800 text-center">
            <p className="text-xs text-charcoal-500 mb-3">Prefer to book via WhatsApp?</p>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-wine-300 hover:text-wine-200 transition-colors">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
