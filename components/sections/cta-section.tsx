import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, ArrowRight, Clock, CheckCircle } from "lucide-react"

export function CtaSection() {
  const contactMethods = [
    {
      title: "电话咨询",
      description: "7*12小时在线客服",
      action: "400-1234-5678",
      icon: Phone,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "微信咨询",
      description: "扫码添加专属顾问",
      action: "立即咨询",
      icon: MessageCircle,
      color: "bg-green-100 text-green-600"
    }
  ]

  const processSteps = [
    "提交门店信息",
    "专家1对1诊断", 
    "制定运营方案",
    "开始合作"
  ]

  const benefits = [
    "免费门店诊断分析",
    "个性化运营方案",
    "1个工作日内回电",
    "无强制消费"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-48 -translate-x-48" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            立即开始您的外卖增长之旅
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            专业团队为您提供免费门店诊断，制定个性化运营方案
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            {/* 流程步骤 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">合作流程</h3>
              <div className="space-y-3">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-white/90">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 服务承诺 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">服务承诺</h3>
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-white/80" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 响应时间 */}
            <div className="bg-white/10 rounded-lg p-4 flex items-center space-x-3">
              <Clock className="w-6 h-6 text-white/80" />
              <div>
                <div className="font-semibold">快速响应</div>
                <div className="text-white/80 text-sm">1个工作日内专家回电，当天提供初步诊断建议</div>
              </div>
            </div>
          </div>

          {/* 右侧CTA */}
          <div className="space-y-6">
            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">免费门店诊断</h3>
                  <p className="text-muted-foreground">
                    填写门店信息，获取专业运营建议
                  </p>
                </div>

                <Button size="lg" className="w-full mb-4" asChild>
                  <Link href="/contact">
                    立即免费诊断
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  已有 <span className="font-semibold text-primary">3000+</span> 商户获得专业诊断建议
                </div>
              </CardContent>
            </Card>

            {/* 联系方式 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${method.color} bg-white/20 flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="font-semibold mb-1">{method.title}</div>
                      <div className="text-white/80 text-xs mb-2">{method.description}</div>
                      <div className="font-bold">{method.action}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
