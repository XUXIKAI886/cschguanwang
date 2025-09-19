import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  BarChart3, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target
} from "lucide-react"

export const metadata: Metadata = {
  title: "服务项目 - 呈尚策划外卖代运营",
  description: "专业的外卖双平台代运营服务，包括视觉设计、数据分析、精准营销等15项核心服务，助力餐饮商户业绩增长。",
  keywords: "外卖代运营服务,双平台代运营,视觉设计,数据分析,营销推广"
}

export default function ServicesPage() {
  const mainServices = [
    {
      title: "双平台代运营",
      subtitle: "饿了么 & 美团全方位运营",
      description: "专业团队同时运营双平台，实现风险分散、用户覆盖最大化，通过数据交叉验证优化运营策略。",
      icon: Zap,
      color: "bg-blue-100 text-blue-600",
      href: "/services/omni",
      features: [
        "15项核心服务覆盖",
        "双平台数据整合分析", 
        "协同运营策略制定",
        "7*12小时专业服务"
      ],
      results: [
        { metric: "曝光提升", value: "30%+" },
        { metric: "转化率", value: "25%-30%" },
        { metric: "评分", value: "4.8/4.7" }
      ]
    },
    {
      title: "视觉与品牌",
      subtitle: "统一品牌视觉体系",
      description: "专业设计团队为您打造统一的品牌视觉形象，从门店装修到菜品展示，全面提升品牌吸引力。",
      icon: Palette,
      color: "bg-purple-100 text-purple-600",
      href: "/services/brand",
      features: [
        "门店装修设计",
        "菜品拍摄美化",
        "品牌VI规范",
        "营销物料制作"
      ],
      results: [
        { metric: "点击率", value: "+45%" },
        { metric: "转化率", value: "+35%" },
        { metric: "品牌认知", value: "+60%" }
      ]
    },
    {
      title: "数据与增长",
      subtitle: "数据驱动的精准运营",
      description: "基于大数据分析的运营决策，实时监控关键指标，持续优化运营策略，确保可持续增长。",
      icon: BarChart3,
      color: "bg-green-100 text-green-600",
      href: "/services/data",
      features: [
        "经营数据深度分析",
        "竞品监控与对标",
        "用户行为洞察",
        "ROI效果追踪"
      ],
      results: [
        { metric: "数据准确性", value: "99%+" },
        { metric: "决策效率", value: "+80%" },
        { metric: "ROI", value: "1:3+" }
      ]
    }
  ]

  const serviceMatrix = [
    { name: "视觉统一", desc: "门店装修、菜品拍摄、品牌规范" },
    { name: "搜索流量", desc: "关键词优化、分类命名、排名提升" },
    { name: "数据驱动", desc: "经营分析、竞品监控、用户洞察" },
    { name: "精准营销", desc: "推广工具、活动策划、优惠配置" },
    { name: "口碑管理", desc: "评价回复、客服处理、满意度提升" },
    { name: "活动对接", desc: "平台活动、大促配置、流量优化" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">专业服务</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              全方位外卖代运营服务
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              从视觉设计到数据分析，从流量获取到口碑管理，
              我们提供覆盖外卖运营全链路的专业服务
            </p>
          </div>

          {/* 服务数据概览 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">15项</div>
                <div className="text-sm text-muted-foreground">核心服务</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">3000+</div>
                <div className="text-sm text-muted-foreground">服务店铺</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">专业团队</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">客户满意度</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 主要服务 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              三大核心服务体系
            </h2>
            <p className="text-xl text-muted-foreground">
              针对性解决外卖运营中的关键问题
            </p>
          </div>

          <div className="space-y-12">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                          <p className="text-muted-foreground">{service.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold">核心功能</h4>
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button asChild>
                        <Link href={service.href}>
                          了解详情
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4">效果指标</h4>
                        <div className="space-y-3">
                          {service.results.map((result, rIndex) => (
                            <div key={rIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <span className="text-sm font-medium">{result.metric}</span>
                              <span className="text-primary font-bold">{result.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="w-5 h-5 text-yellow-500" />
                          <span className="font-semibold">客户评价</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "服务非常专业，效果明显，团队响应及时，值得推荐！"
                        </p>
                        <div className="text-xs text-muted-foreground mt-2">
                          — 某连锁餐饮品牌负责人
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 服务矩阵 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              15项核心服务矩阵
            </h2>
            <p className="text-xl text-muted-foreground">
              全面覆盖外卖运营各个环节
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceMatrix.map((item, index) => (
              <Card key={index} className="group hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <h3 className="font-semibold">{item.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            立即开始您的外卖增长之旅
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            专业团队为您提供免费门店诊断，制定个性化运营方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                免费诊断
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/cases">查看案例</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
