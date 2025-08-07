import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollTop from "./components/ScrollTop";
import Whatsapp from "./components/Whatsapp";
import CTA from "./components/CTA";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Gynecomastia Surgery in Mumbai | Dr. Kunal Sayani",
  description:
    "Get scarless gynecomastia surgery in Mumbai by Dr. Kunal Sayani. USFDA-approved, same-day discharge & fast recovery. Book your consultation now!",
  verification: {
    google: "TRM5uN2AbAEpuMZ-oECmvatuvFw9rdvoKtm-UK8NCsI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16907003627"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16907003627');
          `}
        </Script>

        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D4QH25NNC5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D4QH25NNC5');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KP58PKB7');
          `}
        </Script>
      </head>
      <body className="bg-white text-black">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KP58PKB7"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
        <CTA />
        <Whatsapp />
        <ScrollTop />
      </body>
    </html>
  );
}
