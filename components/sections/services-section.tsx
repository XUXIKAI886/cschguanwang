"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Palette, 
  Search, 
  BarChart3, 
  Target, 
  MessageSquare, 
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react"
import { useState } from "react"

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: "视觉统一",
      description: "专业设计团队为您打造统一的品牌视觉，提升店铺辨识度",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      features: ["门店装修设计", "菜品拍摄美化", "品牌视觉规范", "营销物料设计"],
      stat: "转化率+15%"
    },
    {
      title: "搜索流量",
      description: "优化搜索排名策略，帮助您获取更多免费自然流量",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      features: ["关键词优化", "分类与命名", "店铺SEO", "搜索排名提升"],
      stat: "曝光+30%"
    },
    {
      title: "数据驱动",
      description: "基于大数据分析的精准运营决策，让每一分投入都有回报",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      features: ["经营数据分析", "竞品监控分析", "用户行为分析", "ROI效果追踪"],
      stat: "决策效率+40%"
    },
    {
      title: "精准营销",
      description: "多维度营销推广矩阵，精准触达目标用户提升转化",
      icon: Target,
      color: "from-orange-500 to-amber-500",
      features: ["推广工具运营", "活动策划执行", "优惠券策略", "满减配置优化"],
      stat: "ROI 1:3+"
    },
    {
      title: "口碑管理",
      description: "全方位口碑维护体系，持续提升品牌声誉与用户满意度",
      icon: MessageSquare,
      color: "from-purple-500 to-violet-500",
      features: ["评价回复管理", "客服问题处理", "口碑监控预警", "用户满意度提升"],
      stat: "好评率95%+"
    },
    {
      title: "活动对接",
      description: "第一时间对接平台活动资源，抢占流量红利先机",
      icon: Calendar,
      color: "from-indigo-500 to-blue-500",
      features: ["平台活动报名", "大促活动配置", "营销日历规划", "流量活动优化"],
      stat: "活动转化+25%"
    }
  ]

  return (
    <section className="relative py-32 bg-card overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        {/* 标题区域 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">15项核心服务矩阵</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-4">
              <span className="text-foreground">全方位</span>
              <span className="text-gradient-primary">外卖运营</span>
              <br />
              <span className="text-foreground">解决方案</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              从视觉设计到数据分析，从流量获取到口碑管理，一站式解决外卖运营难题
            </p>
          </div>
          
          <Button variant="outline" size="lg" asChild className="shrink-0 group">
            <Link href="/services">
              查看全部服务
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* 服务网格 - Bento Grid 风格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-background border border-border p-8 transition-all duration-500 card-hover cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 悬浮时的渐变背景 */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* 顶部装饰线 */}
                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${isHovered ? 'via-primary' : 'via-border'} to-transparent transition-all duration-500`} />
                
                <div className="relative">
                  {/* 图标与指标 */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <span className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.stat}
                    </span>
                  </div>
                  
                  {/* 标题与描述 */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient-primary transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* 功能列表 */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 双平台优势 */}
        <div className="mt-20 grid lg:grid-cols-2 gap-6">
          {/* 饿了么 */}
          <div className="relative group p-8 lg:p-10 rounded-3xl bg-[hsl(var(--eleme-blue))]/5 border border-[hsl(var(--eleme-blue))]/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--eleme-blue))]/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--eleme-blue))] flex items-center justify-center text-white text-2xl font-black">
                  饿
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">饿了么运营</h3>
                  <p className="text-muted-foreground">专业平台运营策略</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "曝光提升", value: "+30%" },
                  { label: "店铺分提升", value: "+10~15分" },
                  { label: "7天流量卡", value: "充分利用" },
                  { label: "评价分优化", value: "4.8+" }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-background/50 border border-[hsl(var(--eleme-blue))]/10">
                    <p className="text-2xl font-black text-[hsl(var(--eleme-blue))]">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 美团 */}
          <div className="relative group p-8 lg:p-10 rounded-3xl bg-[hsl(var(--meituan-yellow))]/5 border border-[hsl(var(--meituan-yellow))]/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--meituan-yellow))]/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--meituan-yellow))] flex items-center justify-center text-black text-2xl font-black">
                  美
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">美团运营</h3>
                  <p className="text-muted-foreground">精准流量转化方案</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "转化率提升", value: "+25%" },
                  { label: "商家分优化", value: "+20分" },
                  { label: "点金/铂金展位", value: "高效投放" },
                  { label: "天天神券", value: "最优配置" }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-background/50 border border-[hsl(var(--meituan-yellow))]/10">
                    <p className="text-2xl font-black text-[hsl(var(--meituan-yellow))]">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
