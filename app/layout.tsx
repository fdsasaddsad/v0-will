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
    "Mano Will é tatuador especializado em Blackwork, criando peças únicas que unem estética, identidade e significado. Especialista em mitologias, animais selvagens e natureza. Estúdio em Sorocaba, SP.",
  keywords:
    "tatuagem, tattoo, blackwork, Mano Will, Sorocaba, tatuador, estúdio privado, mitologia, animais selvagens, natureza",
  authors: [{ name: "Mano Will" }],
  openGraph: {
    title: "Mano Will - Tatuador Especialista em Blackwork",
    description:
      "Especialista em Blackwork criando peças únicas com mitologias, animais selvagens e natureza. Estúdio privado em Sorocaba, SP.",
    type: "website",
  },
  generator: "v0.app",
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
