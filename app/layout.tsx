import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { ModalProvider } from "./context/ModalContext";
import ContactModal from "./components/ContactModal";
import JSONLDSchema from "./components/JSONLDSchema";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Group 7 Security | Corporate Guards & Mobile Patrols Australia",
  description: "Professional security guard and mobile patrol services in Australia. Corporate security, alarm response, and 24/7 protection for businesses.",
  keywords: ["Security Guards Australia", "Corporate Security", "Mobile Patrols", "Security Services Australia", "Alarm Response", "Static Guards"],
  icons: {
    icon: '/favicon.webp', 
  },
  openGraph: {
    title: "Group 7 Security | Professional Security Services Australia",
    description: "Professional security guard and mobile patrol services in Australia. Corporate security, alarm response, and 24/7 protection for businesses.",
    url: "https://group7security.com.au",
    siteName: "Group 7 Security",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group 7 Security | Professional Security Services Australia",
    description: "Professional security guard and mobile patrol services in Australia. Corporate security, alarm response, and 24/7 protection for businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://group7security.com.au",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${spaceMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-VMYXZP34RP`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VMYXZP34RP');
          `}
        </Script>
        <JSONLDSchema />
        <ModalProvider>
          <Preloader />
          <Header />
          {children}
          <Footer />
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}
