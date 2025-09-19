import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "呈尚策划 - 外卖双平台代运营专家",
  description: "专业的饿了么&美团双平台代运营服务商，服务3000+店铺，15项核心服务，可量化KPI承诺。提供视觉设计、搜索优化、数据分析、营销推广等全方位外卖运营解决方案。",
  keywords: "外卖代运营,饿了么代运营,美团代运营,外卖爆单,双平台代运营,店铺分提升,呈尚策划",
  authors: [{ name: "呈尚策划" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "呈尚策划 - 外卖双平台代运营专家",
    description: "专业的饿了么&美团双平台代运营服务商，服务3000+店铺，15项核心服务，可量化KPI承诺。",
    type: "website",
    locale: "zh_CN",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
