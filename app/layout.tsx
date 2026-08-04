import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Aluguel de Andaimes em Itaquera | Locadora Exatidão - Entrega Rápida',
  description: 'Aluguel de andaimes tubulares em Itaquera e Zona Leste de SP. Andaimes seguros conforme NR-18, entrega rápida e suporte técnico especializado. Solicite orçamento pelo WhatsApp!',
  keywords: 'aluguel de andaimes em itaquera, locação de andaimes zona leste, andaime tubular itaquera, aluguel andaimes são paulo, locadora de andaimes itaquera',
  authors: [{ name: 'Locadora Exatidão' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Aluguel de Andaimes em Itaquera | Locadora Exatidão',
    description: 'Andaimes tubulares com segurança e entrega rápida em Itaquera e região. Solicite seu orçamento pelo WhatsApp!',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M2CX3J5W');`,
          }}
        />
        <Script
          id="remove-v0-badge"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){function r(){document.querySelectorAll('[id^="v0-built-with-button"],a[href*="built-with-v0"]').forEach(function(e){var n=e.closest('[id^="v0-built-with-button"]')||e.parentElement;(n&&n.id&&n.id.indexOf("v0-built-with-button")===0?n:e).remove()})}function o(){r(),new MutationObserver(r).observe(document.documentElement,{childList:!0,subtree:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2CX3J5W"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
