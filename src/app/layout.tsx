import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartSlideover } from "@/components/cart/CartSlideover";
import { SearchModal } from "@/components/search/SearchModal";
import { SITE } from "@/lib/constants";
import "./globals.css";

const sans = GeistSans;
const mono = GeistMono;

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "bespoke suits Zambia",
    "luxury menswear Lusaka",
    "custom suits Zambia",
    "tailor made suits",
    "SuitUp Zambia",
    "formal wear Zambia",
    "wedding suits Zambia",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "en_ZM",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: SITE.name,
              description: SITE.description,
              url: SITE.url,
              email: SITE.email,
              telephone: SITE.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.split(",")[0],
                addressLocality: "Lusaka",
                addressCountry: "ZM",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "16:00",
                },
              ],
              sameAs: [
                `https://instagram.com/${SITE.social.instagram}`,
                `https://facebook.com/${SITE.social.facebook}`,
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-charcoal-950 text-ivory font-sans antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CartSlideover />
        <SearchModal />
      </body>
    </html>
  );
}
