import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800">
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="text-ivory text-lg tracking-[0.15em] uppercase font-medium">
              SuitUp
            </Link>
            <p className="mt-4 text-charcoal-400 text-sm leading-relaxed max-w-md">
              {SITE.description}
            </p>
            <p className="mt-2 text-charcoal-400 text-sm">
              {SITE.address}
            </p>
          </div>

          <div>
            <h2 className="text-[11px] text-wine-300 uppercase tracking-[0.2em] font-mono mb-6">Navigate</h2>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-300 hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] text-wine-300 uppercase tracking-[0.2em] font-mono mb-6">Contact</h2>
            <ul className="space-y-3 text-sm text-charcoal-300">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-ivory transition-colors duration-300">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-ivory transition-colors duration-300">
                  {SITE.phone}
                </a>
              </li>
              <li className="space-y-1">
                <p className="text-charcoal-400">Mon–Fri 9:00–18:00</p>
                <p className="text-charcoal-400">Sat 9:00–16:00</p>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href={`https://instagram.com/${SITE.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-400 hover:text-ivory transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={`https://facebook.com/${SITE.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-400 hover:text-ivory transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-charcoal-500 text-xs">
              &copy; {currentYear} {SITE.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-charcoal-500">
              <Link href="/privacy" className="hover:text-charcoal-300 transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-charcoal-300 transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
