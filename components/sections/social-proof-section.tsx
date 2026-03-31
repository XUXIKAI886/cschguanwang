"use client"

import { Award, Shield, Users, Clock, Star, Quote } from "lucide-react"
import { useState } from "react"

export function SocialProofSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const certifications = [
    {
      title: "饿了么官方认证",
      description: "平台官方认证服务商资质",
      icon: Award,
      color: "from-[hsl(var(--eleme-blue))] to-blue-400"
    },
    {
      title: "美团优质服务商",
      description: "美团平台专业代运营认证",
      icon: Shield,
      color: "from-[hsl(var(--meituan-yellow))] to-amber-400"
    },
    {
      title: "50+认证运营师",
      description: "专业团队平均经验3年+",
      icon: Users,
      color: "from-primary to-orange-400"
    },
    {
      title: "5年深耕行业",
      description: "持续服务外卖商户",
      icon: Clock,
      color: "from-[hsl(var(--success))] to-emerald-400"
    }
  ]

  const testimonials = [
    {
      content: "合作6个月，店铺从日均800单提升到2400单，团队专业度很高，数据分析详细，运营建议都很实用。",
      author: "张老板",
      role: "川菜餐厅 · 成都",
      rating: 5,
      avatar: "张",
      metrics: { before: "800单/日", after: "2400单/日", growth: "+200%" }
    },
    {
      content: "从新店冷启动到现在8家门店，呈尚的标准化运营体系帮了大忙，每家店都能快速上量。",
      author: "李总",
      role: "茶饮连锁 · 杭州",
      rating: 5,
      avatar: "李",
      metrics: { before: "2家店", after: "8家店", growth: "+300%" }
    },
    {
      content: "数据分析做得很细致，每周的报告都能看到明确的改进方向，ROI从1:2提升到1:4.2。",
      author: "王经理",
      role: "烘焙甜品 · 上海",
      rating: 5,
      avatar: "王",
      metrics: { before: "ROI 1:2", after: "ROI 1:4.2", growth: "+110%" }
    }
  ]

  const clientTypes = [
    { type: "连锁品牌", count: "500+", percentage: 17 },
    { type: "个体餐厅", count: "2000+", percentage: 66 },
    { type: "新兴品牌", count: "400+", percentage: 13 },
    { type: "传统老店", count: "100+", percentage: 4 }
  ]

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[hsl(var(--eleme-blue))]/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative">
        {/* 标题 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">值得信赖的专业团队</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">官方认证</span>
            <span className="text-gradient-primary"> 实力背书</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            双平台官方认证 + 专业团队 + 丰富经验 = 您的成功保障
          </p>
        </div>

        {/* 认证资质 - 横向滚动 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-3xl bg-card border border-border transition-all duration-500 card-hover shadow-sm hover:shadow-lg"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            )
          })}
        </div>

        {/* 客户评价与数据 */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 左侧：客户评价轮播 */}
          <div className="relative p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-sm">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            <div className="min-h-[200px]">
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                &ldquo;{testimonials[activeTestimonial].content}&rdquo;
              </p>
              
              {/* 数据对比 */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-background/50 border border-border mb-8">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">合作前</p>
                  <p className="text-sm font-semibold text-foreground">{testimonials[activeTestimonial].metrics.before}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">合作后</p>
                  <p className="text-sm font-semibold text-foreground">{testimonials[activeTestimonial].metrics.after}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">增长</p>
                  <p className="text-sm font-bold text-[hsl(var(--success))]">{testimonials[activeTestimonial].metrics.growth}</p>
                </div>
              </div>
              
              {/* 作者信息 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[activeTestimonial].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* 切换指示器 */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'w-8 bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 右侧：客户构成 */}
          <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-8">服务客户构成</h3>
            
            <div className="space-y-6">
              {clientTypes.map((client, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{client.type}</span>
                    <span className="text-muted-foreground">{client.count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-1000"
                      style={{ width: `${client.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-background/50 border border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-black text-gradient-primary">85%</p>
                  <p className="text-xs text-muted-foreground">客户续约率</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-foreground">4.9</p>
                  <p className="text-xs text-muted-foreground">满意度评分</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-foreground">72%</p>
                  <p className="text-xs text-muted-foreground">客户推荐率</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
