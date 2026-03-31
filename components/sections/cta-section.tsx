"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowRight, Clock, CheckCircle2, Sparkles } from "lucide-react"

export function CtaSection() {
  const processSteps = [
    { step: "01", title: "提交门店信息", desc: "填写基本信息" },
    { step: "02", title: "专家1对1诊断", desc: "深度问题分析" },
    { step: "03", title: "制定运营方案", desc: "个性化策略" },
    { step: "04", title: "开始合作", desc: "效果可追踪" }
  ]

  const benefits = [
    "免费门店诊断分析",
    "个性化运营方案",
    "1个工作日内回电",
    "无强制消费"
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-orange-600 to-amber-500" />
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* 光晕效果 */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/10 rounded-full blur-[100px]" />
      
      {/* 噪点 */}
      <div className="absolute inset-0 noise opacity-[0.03]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 左侧内容 */}
          <div className="text-white space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">开启您的外卖增长之旅</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                立即获取
                <br />
                <span className="text-white/90">免费门店诊断</span>
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed">
                专业团队为您提供免费门店诊断，制定个性化运营方案，让订单爆发式增长
              </p>
            </div>

            {/* 合作流程 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <span className="text-3xl font-black text-white/30">{item.step}</span>
                    <h4 className="font-semibold mt-2">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-white/30" />
                  )}
                </div>
              ))}
            </div>

            {/* 服务承诺 */}
            <div className="flex flex-wrap gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* 响应时间 */}
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
              <Clock className="w-6 h-6" />
              <div>
                <p className="font-semibold">快速响应</p>
                <p className="text-sm text-white/70">1个工作日内专家回电，当天提供初步诊断建议</p>
              </div>
            </div>
          </div>

          {/* 右侧CTA卡片 */}
          <div className="relative">
            {/* 发光效果 */}
            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-background rounded-3xl border border-border p-8 lg:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-black text-foreground mb-2">免费门店诊断</h3>
                <p className="text-muted-foreground">
                  填写门店信息，获取专业运营建议
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 glow-primary mb-6" 
                asChild
              >
                <Link href="/contact">
                  立即免费诊断
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <div className="text-center text-sm text-muted-foreground mb-8">
                已有 <span className="font-bold text-primary">3000+</span> 商户获得专业诊断建议
              </div>

              {/* 分隔线 */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-4 bg-background text-muted-foreground">或直接联系我们</span>
                </div>
              </div>

              {/* 联系方式 */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:13972539707" 
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border hover:border-primary/30 hover:bg-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--eleme-blue))]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-[hsl(var(--eleme-blue))]" />
                  </div>
                  <span className="text-sm text-muted-foreground">电话咨询</span>
                  <span className="font-semibold text-foreground">13972539707</span>
                </a>
                
                <button className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border hover:border-primary/30 hover:bg-card transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--success))]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-[hsl(var(--success))]" />
                  </div>
                  <span className="text-sm text-muted-foreground">微信咨询</span>
                  <span className="font-semibold text-foreground">扫码添加</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
