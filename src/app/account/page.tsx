import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { User, Package, Heart, Settings, Clock, LogOut } from "lucide-react";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your account, orders, and preferences.",
};

const links = [
  { icon: Package, label: "Orders", desc: "View your order history", href: "/account/orders" },
  { icon: Heart, label: "Wishlist", desc: "Your saved items", href: "/wishlist" },
  { icon: Clock, label: "Appointments", desc: "Upcoming fittings", href: "/appointments" },
  { icon: Settings, label: "Settings", desc: "Account preferences", href: "/account/settings" },
];

export default function AccountPage() {
  return (
    <Container className="pt-24 md:pt-32 pb-20">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 bg-charcoal-950 rounded-full flex items-center justify-center">
          <User size={22} className="text-ivory" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-medium tracking-[0.05em]">My Account</h1>
          <p className="text-sm text-charcoal-500">Welcome back</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-4 p-6 border border-charcoal-200 hover:border-charcoal-950 hover:bg-charcoal-50 transition-all duration-200 group"
          >
            <link.icon size={20} className="text-charcoal-400 group-hover:text-charcoal-950 transition-colors" />
            <div>
              <p className="text-sm font-medium">{link.label}</p>
              <p className="text-xs text-charcoal-500">{link.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-charcoal-200">
        <Link href="/login" className="flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors">
          <LogOut size={16} /> Sign Out
        </Link>
      </div>
    </Container>
  );
}
