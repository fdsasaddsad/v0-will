import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mano Will - Tatuador Especialista em Blackwork | Sorocaba - SP",
  description:
    "Mano Will é um tatuador especialista em blackwork com estúdio privado em Sorocaba, SP. Atendimento personalizado e técnicas refinadas.",
  keywords: "tatuagem, tattoo, blackwork, Mano Will, Sorocaba, tatuador, estúdio privado",
  authors: [{ name: "Mano Will" }],
  openGraph: {
    title: "Mano Will - Tatuador Especialista em Blackwork",
    description: "Especialista em blackwork com estúdio privado em Sorocaba",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
