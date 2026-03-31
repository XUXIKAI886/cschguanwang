import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  title: "呈尚策划 - 外卖双平台代运营专家 | 让订单爆发式增长",
  description: "专业的饿了么&美团双平台代运营服务商，服务3000+店铺，50+认证团队，15项核心服务，可量化KPI承诺。曝光提升30%+，转化率增长25%，评分优化至4.8+。",
  keywords: "外卖代运营,饿了么代运营,美团代运营,外卖爆单,双平台代运营,店铺分提升,呈尚策划,外卖运营,餐饮代运营",
  authors: [{ name: "呈尚策划" }],
  robots: "index, follow",
  openGraph: {
    title: "呈尚策划 - 外卖双平台代运营专家",
    description: "专业的饿了么&美团双平台代运营服务商，服务3000+店铺，15项核心服务，可量化KPI承诺。让订单与口碑同步增长。",
    type: "website",
    locale: "zh_CN",
    siteName: "呈尚策划",
  },
  twitter: {
    card: "summary_large_image",
    title: "呈尚策划 - 外卖双平台代运营专家",
    description: "专业的饿了么&美团双平台代运营服务商，让订单爆发式增长",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
