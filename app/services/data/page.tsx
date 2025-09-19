import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3,
  TrendingUp,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Eye,
  Zap,
  DollarSign,
  Clock
} from "lucide-react"

export const metadata: Metadata = {
  title: "数据与增长服务 - 数据驱动的外卖运营优化",
  description: "专业的外卖数据分析与增长服务，深度经营数据分析、竞品监控、用户行为洞察，ROI提升1:3+。",
  keywords: "外卖数据分析,运营数据,竞品分析,用户分析,ROI优化,数据驱动"
}

export default function DataPage() {
  const dataServices = [
    {
      title: "经营数据分析",
      description: "深度分析店铺经营数据，发现增长机会点",
      icon: BarChart3,
      color: "bg-blue-100 text-blue-600",
      features: [
        "销售数据趋势分析",
        "菜品销售排行分析",
        "时段流量分布分析",
        "客单价变化趋势",
        "复购率深度分析",
        "退款率原因分析"
      ],
      kpis: [
        { name: "数据准确性", value: "99%+" },
        { name: "分析维度", value: "20+" },
        { name: "报告频次", value: "周/月" }
      ]
    },
    {
      title: "竞品监控分析", 
      description: "实时监控竞争对手动态，制定差异化策略",
      icon: Target,
      color: "bg-green-100 text-green-600",
      features: [
        "竞品价格策略监控",
        "营销活动跟踪分析",
        "菜品结构对比分析",
        "评分变化趋势监控",
        "流量表现对比分析",
        "市场份额变化分析"
      ],
      kpis: [
        { name: "监控竞品", value: "10+" },
        { name: "监控频次", value: "每日" },
        { name: "预警响应", value: "2小时" }
      ]
    },
    {
      title: "用户行为洞察",
      description: "深入分析用户行为数据，优化用户体验",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
      features: [
        "用户画像构建分析",
        "购买路径分析优化",
        "流失用户挽回策略",
        "复购用户培养计划",
        "用户生命周期管理",
        "个性化推荐策略"
      ],
      kpis: [
        { name: "用户细分", value: "8+" },
        { name: "行为追踪", value: "全链路" },
        { name: "预测准确率", value: "85%+" }
      ]
    },
    {
      title: "ROI效果追踪",
      description: "精准追踪投入产出比，优化营销预算配置",
      icon: DollarSign,
      color: "bg-orange-100 text-orange-600",
      features: [
        "推广渠道ROI分析",
        "营销活动效果追踪",
        "成本结构优化建议",
        "预算分配策略建议",
        "盈利能力分析报告",
        "增长预测模型构建"
      ],
      kpis: [
        { name: "ROI提升", value: "1:3+" },
        { name: "成本优化", value: "20%+" },
        { name: "预测精度", value: "90%+" }
      ]
    }
  ]

  const analyticsProcess = [
    {
      step: 1,
      title: "数据收集整合",
      description: "从多平台收集全量数据，建立统一数据池",
      icon: BarChart3,
      duration: "1-2天"
    },
    {
      step: 2,
      title: "数据清洗处理",
      description: "清洗异常数据，确保数据质量和准确性",
      icon: Target,
      duration: "1天"
    },
    {
      step: 3,
      title: "深度分析建模",
      description: "运用专业分析模型，挖掘数据价值",
      icon: TrendingUp,
      duration: "2-3天"
    },
    {
      step: 4,
      title: "策略制定执行",
      description: "基于分析结果制定优化策略并执行",
      icon: Zap,
      duration: "持续"
    }
  ]

  const reportTypes = [
    {
      type: "日报",
      frequency: "每日",
      content: ["关键指标监控", "异常数据预警", "竞品动态跟踪"],
      users: "运营人员"
    },
    {
      type: "周报",
      frequency: "每周",
      content: ["周度数据分析", "运营效果评估", "下周策略建议"],
      users: "店长/运营经理"
    },
    {
      type: "月报",
      frequency: "每月",
      content: ["月度经营分析", "增长机会识别", "战略调整建议"],
      users: "决策者/老板"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">数据驱动增长</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              数据驱动的
              <br />
              <span className="text-primary">精准运营优化</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              专业的数据分析团队，通过深度数据挖掘和智能分析，
              为您的外卖业务提供精准的增长策略
            </p>
          </div>

          {/* 核心指标 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <BarChart3 className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">99%+</div>
                <div className="text-sm text-muted-foreground">数据准确性</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">80%+</div>
                <div className="text-sm text-muted-foreground">决策效率提升</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">1:3+</div>
                <div className="text-sm text-muted-foreground">ROI提升</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Eye className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">分析维度</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 数据服务详情 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              四大数据服务体系
            </h2>
            <p className="text-xl text-muted-foreground">
              全方位数据分析，助力精准决策
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dataServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">分析内容</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">核心指标</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {service.kpis.map((kpi, kIndex) => (
                            <div key={kIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                              <div className="text-lg font-bold text-primary">{kpi.value}</div>
                              <div className="text-xs text-muted-foreground">{kpi.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 分析流程 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              数据分析流程
            </h2>
            <p className="text-xl text-muted-foreground">
              标准化分析流程，确保数据质量
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {analyticsProcess.map((process, index) => {
              const IconComponent = process.icon
              return (
                <Card key={index} className="text-center relative group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{process.duration}</span>
                    </div>
                  </CardContent>
                  {index < analyticsProcess.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary bg-white border-2 border-primary rounded-full p-1" />
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 报告体系 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              多层次报告体系
            </h2>
            <p className="text-xl text-muted-foreground">
              针对不同角色提供定制化数据报告
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reportTypes.map((report, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{report.type}</CardTitle>
                  <Badge variant="secondary">{report.frequency}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">报告内容</h4>
                      <ul className="space-y-1">
                        {report.content.map((item, cIndex) => (
                          <li key={cIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <div className="text-sm">
                        <span className="font-semibold">目标用户：</span>
                        <span className="text-muted-foreground">{report.users}</span>
                      </div>
                    </div>
                  </div>
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
            让数据为您的业务增长保驾护航
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            专业数据分析师团队，为您提供深度数据洞察和增长策略
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              立即获取数据分析
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
