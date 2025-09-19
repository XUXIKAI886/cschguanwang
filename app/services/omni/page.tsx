import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  Shield,
  Clock
} from "lucide-react"

export const metadata: Metadata = {
  title: "双平台代运营 - 饿了么美团专业代运营服务",
  description: "专业的饿了么美团双平台代运营服务，风险分散、用户覆盖最大化，数据交叉验证，平均提升曝光30%+，转化率25%-30%。",
  keywords: "双平台代运营,饿了么代运营,美团代运营,外卖代运营,双平台协同"
}

export default function OmniChannelPage() {
  const platformFeatures = [
    {
      platform: "饿了么",
      logo: "🍜",
      color: "bg-blue-100 text-blue-600",
      specialties: [
        "店铺分优化（+10~15分）",
        "评价分提升策略",
        "7天流量卡充分利用",
        "红包营销配置",
        "搜索排名优化",
        "分类与命名策略"
      ],
      results: {
        exposure: "30%+",
        score: "+10~15分",
        rating: "4.8+",
        traffic: "7天快速起量"
      }
    },
    {
      platform: "美团",
      logo: "🛵",
      color: "bg-orange-100 text-orange-600", 
      specialties: [
        "商家分/品质分优化",
        "天天神券配置策略",
        "点金推广/铂金展位",
        "满减套餐优化",
        "推广魔方运营",
        "活动报名对接"
      ],
      results: {
        conversion: "25%-30%",
        score: "商家分优化",
        rating: "4.7+",
        roi: "1:3+"
      }
    }
  ]

  const serviceProcess = [
    {
      step: "前期调研",
      title: "深度诊断分析",
      description: "全面分析门店现状、竞品对标、用户画像，制定个性化策略",
      duration: "3-5天",
      deliverables: ["诊断报告", "竞品分析", "策略规划"]
    },
    {
      step: "基础建设",
      title: "店铺优化搭建",
      description: "门店装修、菜品优化、基础信息完善，建立运营基础",
      duration: "7-10天", 
      deliverables: ["店铺装修", "菜品拍摄", "信息优化"]
    },
    {
      step: "推广运营",
      title: "流量获取转化",
      description: "多渠道推广获客、数据监控优化、持续提升效果",
      duration: "持续进行",
      deliverables: ["推广投放", "数据报告", "效果优化"]
    },
    {
      step: "长期维护",
      title: "稳定增长保障",
      description: "长期监控维护、策略迭代升级、确保稳定增长",
      duration: "持续服务",
      deliverables: ["维护服务", "策略升级", "效果保障"]
    }
  ]

  const advantages = [
    {
      title: "风险分散",
      description: "双平台运营降低单一平台风险",
      icon: Shield,
      color: "text-green-600"
    },
    {
      title: "用户覆盖最大化",
      description: "触达更广泛的用户群体",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "数据交叉验证",
      description: "双平台数据对比验证策略效果",
      icon: BarChart3,
      color: "text-purple-600"
    },
    {
      title: "成本效益优化",
      description: "统一管理降低运营成本",
      icon: Target,
      color: "text-orange-600"
    }
  ]

  const pricing = [
    {
      name: "基础版",
      price: "3,999",
      period: "月",
      description: "适合单店或新手商户",
      features: [
        "双平台基础运营",
        "店铺装修优化",
        "基础数据分析",
        "月度效果报告",
        "客服支持(工作日)"
      ],
      popular: false
    },
    {
      name: "增长版",
      price: "6,999", 
      period: "月",
      description: "适合追求快速增长的商户",
      features: [
        "全方位运营服务",
        "专业视觉设计",
        "深度数据分析",
        "推广工具运营",
        "周报+月报",
        "7*12小时支持"
      ],
      popular: true
    },
    {
      name: "品牌版",
      price: "12,999",
      period: "月", 
      description: "适合连锁品牌和大商户",
      features: [
        "品牌级运营服务",
        "定制化解决方案",
        "实时数据监控",
        "专属客户经理",
        "多店铺统一管理",
        "7*24小时支持"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="mb-4">双平台协同</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">
                饿了么 & 美团
                <br />
                <span className="text-primary">双平台代运营</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                专业团队同时运营双平台，实现风险分散、用户覆盖最大化，
                通过数据交叉验证持续优化运营策略，确保稳定增长。
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">30%+</div>
                  <div className="text-sm text-muted-foreground">曝光提升</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">25%-30%</div>
                  <div className="text-sm text-muted-foreground">转化率提升</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    免费诊断
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/cases">查看案例</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {platformFeatures.map((platform, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="text-4xl mb-2">{platform.logo}</div>
                      <CardTitle className="text-lg">{platform.platform}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>曝光</span>
                          <span className="font-bold text-primary">{platform.results.exposure || platform.results.conversion}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>评分</span>
                          <span className="font-bold text-primary">{platform.results.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 双平台优势 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              双平台协同优势
            </h2>
            <p className="text-xl text-muted-foreground">
              1+1{'>'}2 的运营效果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${advantage.color}`} />
                    <h3 className="font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* 详细对比 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platformFeatures.map((platform, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className={`${platform.color} bg-opacity-10`}>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{platform.logo}</div>
                    <div>
                      <CardTitle className="text-xl">{platform.platform}专项服务</CardTitle>
                      <p className="text-muted-foreground">针对平台特性优化</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">核心服务</h4>
                      <ul className="space-y-2">
                        {platform.specialties.map((specialty, sIndex) => (
                          <li key={sIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              服务流程
            </h2>
            <p className="text-xl text-muted-foreground">
              标准化流程确保服务质量
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceProcess.map((process, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{process.step}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{process.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">交付物</h4>
                    <ul className="space-y-1">
                      {process.deliverables.map((item, dIndex) => (
                        <li key={dIndex} className="text-xs text-muted-foreground flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                {index < serviceProcess.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary bg-white border-2 border-primary rounded-full p-1" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 价格套餐 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              服务套餐
            </h2>
            <p className="text-xl text-muted-foreground">
              选择适合您的服务方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">推荐</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">¥{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/contact">立即咨询</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            准备开始双平台运营？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            专业团队为您提供免费门店诊断，制定双平台协同运营策略
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              免费诊断
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
