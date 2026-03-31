"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Play, CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
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
  }, [value])
  
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}

export function HeroSection() {
  const trustBadges = [
    "7×12小时专属服务",
    "1对1运营顾问",
    "效果不达标可退款"
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* 渐变光晕 */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(var(--eleme-blue))]/10 rounded-full blur-[100px]" />
      
      {/* 噪点纹理 */}
      <div className="absolute inset-0 noise" />

      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            {/* 标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--success))] animate-pulse" />
              <span className="text-sm text-muted-foreground">双平台代运营服务商 · 饿了么 & 美团</span>
            </div>

            {/* 主标题 */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-foreground">让外卖订单</span>
              <br />
              <span className="text-gradient-primary">爆发式增长</span>
            </h1>

            {/* 副标题 */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              数据驱动的精准运营策略，为您的餐饮品牌实现
              <span className="text-foreground font-medium">曝光提升30%+</span>、
              <span className="text-foreground font-medium">转化率增长25%</span>、
              <span className="text-foreground font-medium">评分优化至4.8+</span>
            </p>

            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                asChild 
                className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 glow-primary group"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  免费诊断门店
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="h-14 px-8 text-lg font-semibold border-border hover:bg-card group"
              >
                <Link href="/cases">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  查看成功案例
                </Link>
              </Button>
            </div>

            {/* 信任标识 */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--success))]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧数据看板 */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative bg-card rounded-3xl border border-border p-8 lg:p-10 space-y-8">
              {/* 装饰线条 */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              
              {/* 头部 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">实时运营数据</p>
                  <h3 className="text-xl font-bold text-foreground">核心指标概览</h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] text-sm">
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  实时更新
                </div>
              </div>

              {/* 主数据展示 */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 p-6 rounded-2xl bg-background/50 border border-border">
                  <p className="text-sm text-muted-foreground">累计服务店铺</p>
                  <p className="text-4xl font-black text-gradient-primary">
                    <AnimatedNumber value={3000} suffix="+" />
                  </p>
                </div>
                <div className="space-y-2 p-6 rounded-2xl bg-background/50 border border-border">
                  <p className="text-sm text-muted-foreground">认证运营团队</p>
                  <p className="text-4xl font-black text-foreground">
                    <AnimatedNumber value={50} suffix="+" />
                  </p>
                </div>
                <div className="space-y-2 p-6 rounded-2xl bg-background/50 border border-border">
                  <p className="text-sm text-muted-foreground">核心服务项</p>
                  <p className="text-4xl font-black text-foreground">
                    <AnimatedNumber value={15} suffix="项" />
                  </p>
                </div>
                <div className="space-y-2 p-6 rounded-2xl bg-background/50 border border-border">
                  <p className="text-sm text-muted-foreground">平均ROI回报</p>
                  <p className="text-4xl font-black text-foreground">
                    1:<AnimatedNumber value={3} />
                  </p>
                </div>
              </div>

              {/* 平台对比 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[hsl(var(--eleme-blue))]/10 border border-[hsl(var(--eleme-blue))]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[hsl(var(--eleme-blue))] flex items-center justify-center text-white text-xs font-bold">饿</div>
                    <span className="font-semibold text-foreground">饿了么</span>
                  </div>
                  <p className="text-2xl font-black text-[hsl(var(--eleme-blue))]">+30%</p>
                  <p className="text-xs text-muted-foreground">曝光提升</p>
                </div>
                <div className="p-4 rounded-xl bg-[hsl(var(--meituan-yellow))]/10 border border-[hsl(var(--meituan-yellow))]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[hsl(var(--meituan-yellow))] flex items-center justify-center text-black text-xs font-bold">美</div>
                    <span className="font-semibold text-foreground">美团</span>
                  </div>
                  <p className="text-2xl font-black text-[hsl(var(--meituan-yellow))]">+25%</p>
                  <p className="text-xs text-muted-foreground">转化提升</p>
                </div>
              </div>

              {/* 底部装饰 */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            {/* 浮动装饰卡片 */}
            <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-card border border-border shadow-2xl animate-pulse-ring hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--success))]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[hsl(var(--success))]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">店铺分+15</p>
                  <p className="text-xs text-muted-foreground">本周完成</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部滚动品牌条 */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-card/50 backdrop-blur-sm py-6 overflow-hidden">
        <div className="flex animate-scroll-x">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center gap-12 px-6">
              {["快餐", "茶饮", "烧烤", "火锅", "夜宵", "生鲜", "甜品", "粥店", "便当", "小吃", "日料", "川菜"].map((category, index) => (
                <span key={index} className="text-muted-foreground/50 text-sm font-medium whitespace-nowrap">
                  {category}品类专家
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
