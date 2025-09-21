import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Check, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  TrendingUp,
  Zap,
  Shield,
  Target,
  Phone
} from "lucide-react"

export function HeroSection() {
  const achievements = [
    { value: "3000+", label: "服务店铺", icon: Users },
    { value: "50+", label: "认证团队", icon: Award },
    { value: "15项", label: "核心服务", icon: Target },
    { value: "可度量", label: "KPI承诺", icon: Shield }
  ]

  const platformMetrics = [
    {
      platform: "饿了么",
      score: "4.8",
      improvement: "曝光提升30%+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      platform: "美团",
      score: "4.7", 
      improvement: "转化率25%-30%",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* 动态背景元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* 顶部标签 */}
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <Award className="w-4 h-4 mr-2" />
              专业外卖双平台代运营服务商
            </Badge>
          </div>

          {/* 主标题 */}
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              外卖双平台代运营
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              让订单与口碑同步增长
            </span>
          </h1>

          {/* 副标题 */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            饿了么 & 美团双平台协同运营，通过数据驱动的精准策略，为您的餐饮品牌实现
            <span className="text-primary font-semibold">流量增长、转化提升和口碑优化</span>
          </p>

          {/* 核心数据展示 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 max-w-4xl mx-auto">
            {achievements.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{item.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* 平台评分展示 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {platformMetrics.map((platform, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${platform.color} text-white font-bold text-xl mb-4 mx-auto`}>
                    {platform.score}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{platform.platform}</h3>
                  <p className="text-primary font-semibold text-lg">{platform.improvement}</p>
                  <div className="flex items-center justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ROI指标 */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-2xl max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-black mb-2">1:3</div>
                <div className="text-green-100 font-medium">平均ROI回报</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" asChild className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                免费诊断门店
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="px-10 py-4 text-lg font-semibold border-2 hover:bg-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/cases">
                <Award className="w-5 h-5 mr-2" />
                查看成功案例
              </Link>
            </Button>
          </div>

          {/* 信任标识 */}
          <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>7*12小时服务</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>1对1专属顾问</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>免费诊断 按效付费</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
