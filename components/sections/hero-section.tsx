import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, Star, Users, Award, TrendingUp } from "lucide-react"

export function HeroSection() {
  const highlights = [
    "服务3000+店铺",
    "50+认证运营团队",
    "15项核心服务",
    "可度量KPI承诺"
  ]

  const platformBenefits = [
    {
      platform: "饿了么",
      improvement: "曝光提升30%+",
      icon: "🍜"
    },
    {
      platform: "美团",
      improvement: "转化率25%-30%",
      icon: "🛵"
    }
  ]

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-grid-gray-100 opacity-50" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>专业代运营服务商</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                外卖双平台代运营
                <br />
                <span className="text-primary">让订单与口碑同步增长</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                饿了么 & 美团双平台协同运营，通过数据驱动的精准策略，
                为您的餐饮品牌实现流量增长、转化提升和口碑优化。
              </p>
            </div>

            {/* 核心亮点 */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="px-8">
                <Link href="/contact">
                  免费诊断门店
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8">
                <Link href="/cases">查看成功案例</Link>
              </Button>
            </div>

            {/* 平台优势卡片 */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {platformBenefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-dashed border-primary/20 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <div className="font-semibold text-sm">{benefit.platform}</div>
                    <div className="text-primary font-bold text-lg">{benefit.improvement}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 右侧视觉 */}
          <div className="relative">
            <div className="relative z-10">
              {/* 主要统计卡片 */}
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div>
                      <div className="text-3xl font-bold text-primary">3000+</div>
                      <div className="text-muted-foreground">服务店铺</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold">4.8</div>
                        <div className="text-xs text-muted-foreground">饿了么评分</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold">4.7</div>
                        <div className="text-xs text-muted-foreground">美团评分</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold">1:3</div>
                        <div className="text-xs text-muted-foreground">ROI回报</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 浮动的小卡片 */}
              <Card className="absolute -top-4 -left-4 bg-green-50 border-green-200 shadow-lg">
                <CardContent className="p-4 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-bold text-green-800">订单增长</div>
                    <div className="text-sm text-green-600">平均提升45%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-4 -right-4 bg-blue-50 border-blue-200 shadow-lg">
                <CardContent className="p-4 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-bold text-blue-800">客户复购</div>
                    <div className="text-sm text-blue-600">提升65%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute top-20 -right-8 bg-orange-50 border-orange-200 shadow-lg">
                <CardContent className="p-3 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-orange-600" />
                  <div className="text-sm">
                    <div className="font-bold text-orange-800">好评率</div>
                    <div className="text-orange-600">≥95%</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
