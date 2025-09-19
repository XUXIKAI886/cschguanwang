import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Users, Clock, Star, CheckCircle } from "lucide-react"

export function SocialProofSection() {
  const certifications = [
    {
      title: "饿了么官方认证服务商",
      description: "获得饿了么平台官方认证资质",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "美团优质代运营商",
      description: "美团平台认证的专业代运营服务商",
      icon: Shield,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "50+认证运营师",
      description: "专业认证的运营团队",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "5年专业经验",
      description: "深耕外卖代运营领域",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]

  const teamFeatures = [
    "50+认证运营师，平均经验3年+",
    "15项核心服务能力，覆盖运营全链路",
    "7*12小时在线服务，快速响应客户需求",
    "双平台官方认证，服务质量有保障",
    "数据驱动决策，可视化效果报告",
    "3000+成功案例，丰富行业经验"
  ]

  const clientTypes = [
    { type: "连锁品牌", count: "500+", icon: "🏢" },
    { type: "个体餐厅", count: "2000+", icon: "🏪" },
    { type: "新兴品牌", count: "400+", icon: "✨" },
    { type: "传统老店", count: "100+", icon: "🏮" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            值得信赖的专业团队
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            官方认证资质 + 专业团队 + 丰富经验 = 您的成功保障
          </p>
        </div>

        {/* 认证资质 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${cert.bgColor} flex items-center justify-center`}>
                    <IconComponent className={`w-8 h-8 ${cert.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 团队优势 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">专业团队优势</h3>
            <div className="space-y-3">
              {teamFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">服务客户类型</h3>
            <div className="grid grid-cols-2 gap-4">
              {clientTypes.map((client, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{client.icon}</div>
                    <div className="text-2xl font-bold text-primary mb-1">{client.count}</div>
                    <div className="text-sm text-muted-foreground">{client.type}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* 客户评价 */}
        <div className="bg-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">客户真实评价</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="ml-2">川菜餐厅</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "合作6个月，店铺从日均800单提升到2400单，团队专业度很高，
                  数据分析详细，运营建议都很实用。"
                </p>
                <div className="text-sm font-medium">— 张老板，成都</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="ml-2">茶饮连锁</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "从新店冷启动到现在8家门店，呈尚的标准化运营体系帮了大忙，
                  每家店都能快速上量。"
                </p>
                <div className="text-sm font-medium">— 李总，杭州</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="ml-2">烘焙甜品</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "数据分析做得很细致，每周的报告都能看到明确的改进方向，
                  ROI从1:2提升到1:4.2。"
                </p>
                <div className="text-sm font-medium">— 王经理，上海</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
