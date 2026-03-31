"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowRight, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function CasesSection() {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null)

  const successCases = [
    {
      title: "某连锁茶饮品牌",
      category: "茶饮连锁",
      location: "上海",
      period: "3个月",
      description: "新品牌快速冷启动，通过双平台协同运营快速获得市场认知",
      platforms: ["饿了么", "美团"],
      mainMetric: { label: "日均单量", before: "150单", after: "580单", growth: "+287%" },
      subMetrics: [
        { label: "月销售额", value: "174万" },
        { label: "店铺评分", value: "4.8" },
        { label: "复购率", value: "42%" }
      ],
      gradient: "from-pink-500/20 via-purple-500/10 to-transparent"
    },
    {
      title: "传统川菜老店",
      category: "川菜餐厅",
      location: "成都",
      period: "6个月",
      description: "传统餐厅数字化转型，通过专业运营重新焕发活力",
      platforms: ["饿了么", "美团"],
      mainMetric: { label: "月订单量", before: "800单", after: "2400单", growth: "+200%" },
      subMetrics: [
        { label: "客单价", value: "78元" },
        { label: "店铺分", value: "83分" },
        { label: "ROI", value: "1:4.2" }
      ],
      gradient: "from-orange-500/20 via-red-500/10 to-transparent"
    },
    {
      title: "新式烘焙工坊",
      category: "烘焙甜品",
      location: "杭州",
      period: "4个月",
      description: "网红烘焙品牌标准化运营，实现多城市快速复制",
      platforms: ["饿了么", "美团"],
      mainMetric: { label: "门店数量", before: "2家", after: "8家", growth: "+300%" },
      subMetrics: [
        { label: "单店日均", value: "450单" },
        { label: "品牌知名度", value: "区域化" },
        { label: "标准化", value: "95%" }
      ],
      gradient: "from-amber-500/20 via-yellow-500/10 to-transparent"
    }
  ]

  return (
    <section className="relative py-32 bg-card overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        {/* 标题 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">真实案例 · 数据说话</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-4">
              <span className="text-foreground">成功</span>
              <span className="text-gradient-primary">案例</span>
              <span className="text-foreground">展示</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              看看我们如何帮助不同类型的餐饮商户实现增长目标
            </p>
          </div>
          
          <Button variant="outline" size="lg" asChild className="shrink-0 group">
            <Link href="/cases">
              查看全部案例
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* 案例卡片 */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {successCases.map((caseItem, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-background border border-border overflow-hidden transition-all duration-500 card-hover"
              onMouseEnter={() => setHoveredCase(index)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              {/* 渐变背景 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* 头部 */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex gap-2 mb-3">
                      {caseItem.platforms.map((platform, pIndex) => (
                        <Badge 
                          key={pIndex} 
                          variant="outline" 
                          className={`text-xs ${
                            platform === '饿了么' 
                              ? 'border-[hsl(var(--eleme-blue))]/30 text-[hsl(var(--eleme-blue))]' 
                              : 'border-[hsl(var(--meituan-yellow))]/30 text-[hsl(var(--meituan-yellow))]'
                          }`}
                        >
                          {platform}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{caseItem.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {caseItem.category} · {caseItem.location} · {caseItem.period}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {caseItem.description}
                </p>

                {/* 主指标 */}
                <div className="p-6 rounded-2xl bg-card/50 border border-border mb-6">
                  <p className="text-sm text-muted-foreground mb-2">{caseItem.mainMetric.label}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">{caseItem.mainMetric.before}</span>
                      <span className="text-3xl font-black text-foreground ml-2">{caseItem.mainMetric.after}</span>
                    </div>
                    <span className="text-2xl font-black text-[hsl(var(--success))]">{caseItem.mainMetric.growth}</span>
                  </div>
                </div>

                {/* 次要指标 */}
                <div className="grid grid-cols-3 gap-4">
                  {caseItem.subMetrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center">
                      <p className="text-lg font-bold text-foreground">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部统计 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-background/50 border border-border">
          {[
            { label: "客户续约率", value: "85%", color: "text-foreground" },
            { label: "满意度评分", value: "4.9", color: "text-foreground" },
            { label: "客户推荐率", value: "72%", color: "text-foreground" },
            { label: "平均业绩增长", value: "3.2x", color: "text-gradient-primary" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
