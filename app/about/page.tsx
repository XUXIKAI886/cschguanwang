import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Award,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Star,
  Heart
} from "lucide-react"

export const metadata: Metadata = {
  title: "关于我们 - 呈尚策划专业外卖代运营团队",
  description: "呈尚策划成立于2019年，专注外卖双平台代运营服务，拥有50+认证运营师，服务3000+店铺，是饿了么美团官方认证服务商。",
  keywords: "呈尚策划,外卖代运营,团队介绍,公司简介,企业文化"
}

export default function AboutPage() {
  const companyStats = [
    { label: "成立年份", value: "2019", unit: "年" },
    { label: "服务店铺", value: "3000+", unit: "家" },
    { label: "认证团队", value: "50+", unit: "人" },
    { label: "覆盖城市", value: "100+", unit: "个" }
  ]

  const milestones = [
    {
      year: "2019",
      title: "公司成立",
      description: "呈尚策划正式成立，专注外卖代运营服务",
      achievement: "服务首批100家店铺"
    },
    {
      year: "2020",
      title: "平台认证",
      description: "获得饿了么、美团双平台官方认证资质",
      achievement: "服务店铺突破500家"
    },
    {
      year: "2021",
      title: "团队扩张",
      description: "团队规模扩展至30+人，建立标准化服务体系",
      achievement: "服务店铺突破1000家"
    },
    {
      year: "2022", 
      title: "技术升级",
      description: "自主研发数据分析系统，提升服务效率",
      achievement: "服务店铺突破2000家"
    },
    {
      year: "2023",
      title: "业务拓展",
      description: "业务范围扩展至全国100+城市",
      achievement: "服务店铺突破3000家"
    }
  ]

  const teamValues = [
    {
      title: "专业至上",
      description: "每位团队成员都经过严格的专业培训和认证",
      icon: Award,
      color: "text-blue-600"
    },
    {
      title: "客户第一",
      description: "始终以客户成功为我们工作的首要目标",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "数据驱动",
      description: "用数据说话，让每个决策都有据可依",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "持续创新",
      description: "不断学习平台规则变化，优化服务方法",
      icon: Target,
      color: "text-purple-600"
    }
  ]

  const certifications = [
    {
      title: "饿了么官方认证服务商",
      description: "获得饿了么平台官方认证的代运营服务商资质",
      year: "2020"
    },
    {
      title: "美团优质代运营商",
      description: "美团平台认证的专业代运营服务商",
      year: "2020"
    },
    {
      title: "ISO9001质量管理体系",
      description: "通过国际标准化组织质量管理体系认证",
      year: "2021"
    },
    {
      title: "高新技术企业",
      description: "被认定为国家高新技术企业",
      year: "2022"
    }
  ]

  const leadership = [
    {
      name: "张总",
      position: "创始人&CEO",
      experience: "10年互联网运营经验",
      description: "前美团高级运营专家，深度理解平台运营逻辑"
    },
    {
      name: "李总",
      position: "技术总监",
      experience: "8年技术开发经验",
      description: "负责数据分析系统和运营工具的研发"
    },
    {
      name: "王总",
      position: "运营总监",
      experience: "6年外卖运营经验",
      description: "带领50+人运营团队，制定标准化服务流程"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">关于我们</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              专业的外卖代运营服务商
              <br />
              <span className="text-primary">让每个餐饮品牌都能成功</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              呈尚策划成立于2019年，专注于外卖双平台代运营服务。
              我们拥有专业的运营团队、先进的数据分析系统和丰富的行业经验，
              致力于帮助餐饮商户在外卖平台上实现业绩增长。
            </p>
          </div>

          {/* 核心数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              发展历程
            </h2>
            <p className="text-xl text-muted-foreground">
              从创业初期到行业领军，我们的每一步都见证着外卖行业的发展
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8 lg:pl-8">
                    <Card className={`${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge variant="secondary">{milestone.year}</Badge>
                          <h3 className="text-xl font-bold">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">{milestone.description}</p>
                        <div className="text-sm font-medium text-primary">{milestone.achievement}</div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 团队价值观 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              团队价值观
            </h2>
            <p className="text-xl text-muted-foreground">
              我们的价值观指导着团队的每一个行动
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${value.color}`} />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 资质认证 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              资质认证
            </h2>
            <p className="text-xl text-muted-foreground">
              多项权威认证，确保服务质量和专业性
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold">{cert.title}</h3>
                        <Badge variant="outline">{cert.year}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              核心团队
            </h2>
            <p className="text-xl text-muted-foreground">
              经验丰富的创始团队，为您的业务增长保驾护航
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <div className="text-primary font-medium mb-2">{leader.position}</div>
                  <Badge variant="secondary" className="mb-3">{leader.experience}</Badge>
                  <p className="text-sm text-muted-foreground">{leader.description}</p>
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
            选择呈尚策划，选择专业与信赖
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            我们的专业团队随时准备为您的外卖业务提供全方位的运营支持
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                免费咨询
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/services">了解服务</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
