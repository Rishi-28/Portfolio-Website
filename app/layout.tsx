import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/lib/theme-provider"
import AnimatedBackground from '@/components/animated-background'
import "./globals.css"
import "./skills.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
        >
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

