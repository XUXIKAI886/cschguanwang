"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, ShoppingCart, Star, DollarSign, Users, Award, MapPin, Clock } from "lucide-react"

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [ref])
  
  return isInView
}

function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "",
  isInView 
}: { 
  value: number
  suffix?: string
  prefix?: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [value, isInView])
  
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  const mainStats = [
    {
      icon: TrendingUp,
      value: 30,
      suffix: "%+",
      label: "曝光提升",
      description: "饿了么平台平均曝光增长",
      color: "text-[hsl(var(--eleme-blue))]",
      bgColor: "bg-[hsl(var(--eleme-blue))]/10",
      borderColor: "border-[hsl(var(--eleme-blue))]/20"
    },
    {
      icon: ShoppingCart,
      value: 25,
      suffix: "%",
      label: "转化率提升",
      description: "美团平台转化率增长区间",
      color: "text-[hsl(var(--meituan-yellow))]",
      bgColor: "bg-[hsl(var(--meituan-yellow))]/10",
      borderColor: "border-[hsl(var(--meituan-yellow))]/20"
    },
    {
      icon: Star,
      value: 4.8,
      suffix: "",
      label: "平台评分",
      description: "双平台平均评分标准",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: DollarSign,
      value: 3,
      prefix: "1:",
      suffix: "",
      label: "ROI回报",
      description: "投入产出比样例区间",
      color: "text-[hsl(var(--success))]",
      bgColor: "bg-[hsl(var(--success))]/10",
      borderColor: "border-[hsl(var(--success))]/20"
    }
  ]

  const detailStats = [
    { label: "累计服务店铺", value: 3000, suffix: "+", icon: Users },
    { label: "认证运营团队", value: 50, suffix: "+", icon: Award },
    { label: "覆盖城市", value: 100, suffix: "+", icon: MapPin },
    { label: "服务年限", value: 5, suffix: "年", icon: Clock }
  ]

  return (
    <section ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative">
        {/* 标题区域 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">可度量的成功指标</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">我们用</span>
            <span className="text-gradient-primary">数据</span>
            <span className="text-foreground">说话</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            每一个指标都是对客户承诺的兑现，透明化的数据展示让合作更有信心
          </p>
        </div>

        {/* 主要指标 - 大数字展示 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div 
                key={index} 
                className={`relative group p-8 rounded-3xl bg-card border ${stat.borderColor} transition-all duration-500 hover:scale-105 card-hover`}
                style={{ 
                  opacity: isInView ? 1 : 0, 
                  transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                {/* 背景光晕 */}
                <div className={`absolute inset-0 ${stat.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  
                  <div className={`text-5xl lg:text-6xl font-black mb-3 ${stat.color}`}>
                    {stat.value === 4.8 ? (
                      <AnimatedCounter value={48} suffix="" isInView={isInView} />
                    ) : (
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix} 
                        prefix={stat.prefix} 
                        isInView={isInView} 
                      />
                    )}
                    {stat.value === 4.8 && <span className="text-3xl">/10</span>}
                  </div>
                  
                  <div className="text-lg font-bold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 次要指标 - 横向展示 */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 p-8 rounded-3xl bg-card/50 border border-border">
          {detailStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div 
                key={index} 
                className="flex items-center gap-4"
                style={{ 
                  opacity: isInView ? 1 : 0, 
                  transition: `opacity 0.6s ease-out ${0.5 + index * 0.1}s`
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-black text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 免责声明 */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground/60 max-w-4xl mx-auto">
            * 以上数据为样例区间，非保证性承诺。实际效果因行业、地区、竞争环境等因素而异。
          </p>
        </div>
      </div>
    </section>
  )
}
