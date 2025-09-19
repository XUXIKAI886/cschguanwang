import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Palette, 
  Search, 
  BarChart3, 
  Target, 
  MessageSquare, 
  Calendar,
  Eye,
  TrendingUp,
  Users,
  Star,
  Megaphone,
  Zap,
  Award,
  Shield,
  FileText
} from "lucide-react"

export function ServicesSection() {
  const serviceCategories = [
    {
      title: "视觉统一",
      description: "专业设计团队为您打造统一的品牌视觉",
      icon: Palette,
      color: "bg-purple-100 text-purple-600",
      services: [
        "门店装修设计",
        "菜品拍摄美化", 
        "品牌视觉规范",
        "营销物料设计"
      ]
    },
    {
      title: "搜索流量",
      description: "优化搜索排名，获取更多免费流量",
      icon: Search,
      color: "bg-blue-100 text-blue-600",
      services: [
        "关键词优化",
        "分类与命名",
        "店铺SEO",
        "搜索排名提升"
      ]
    },
    {
      title: "数据驱动",
      description: "基于数据分析的精准运营决策",
      icon: BarChart3,
      color: "bg-green-100 text-green-600",
      services: [
        "经营数据分析",
        "竞品监控分析",
        "用户行为分析",
        "ROI效果追踪"
      ]
    },
    {
      title: "精准营销",
      description: "多维度营销推广，提升转化效果",
      icon: Target,
      color: "bg-orange-100 text-orange-600",
      services: [
        "推广工具运营",
        "活动策划执行",
        "优惠券策略",
        "满减配置优化"
      ]
    },
    {
      title: "口碑管理",
      description: "全方位口碑维护，提升品牌声誉",
      icon: MessageSquare,
      color: "bg-pink-100 text-pink-600",
      services: [
        "评价回复管理",
        "客服问题处理",
        "口碑监控预警",
        "用户满意度提升"
      ]
    },
    {
      title: "活动对接",
      description: "第一时间对接平台活动资源",
      icon: Calendar,
      color: "bg-indigo-100 text-indigo-600",
      services: [
        "平台活动报名",
        "大促活动配置",
        "营销日历规划",
        "流量活动优化"
      ]
    }
  ]

  const platformAdvantages = [
    {
      platform: "饿了么",
      logo: "🍜",
      advantages: [
        { icon: Eye, text: "曝光提升30%+" },
        { icon: TrendingUp, text: "店铺分+10~15分" },
        { icon: Zap, text: "7天流量卡利用" },
        { icon: Award, text: "评价分优化" }
      ]
    },
    {
      platform: "美团",
      logo: "🛵", 
      advantages: [
        { icon: Users, text: "转化率25%-30%" },
        { icon: Star, text: "商家分/品质分优化" },
        { icon: Megaphone, text: "点金/铂金展位" },
        { icon: Shield, text: "天天神券配置" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            15项核心服务矩阵
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            从视觉设计到数据分析，从流量获取到口碑管理，提供全方位的外卖运营解决方案
          </p>
        </div>

        {/* 服务矩阵 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 双平台优势对比 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              双平台协同优势
            </h3>
            <p className="text-muted-foreground">
              同时运营饿了么和美团，实现风险分散、用户覆盖最大化、数据交叉验证
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platformAdvantages.map((platform, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{platform.logo}</div>
                  <CardTitle className="text-xl">{platform.platform}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {platform.advantages.map((advantage, advantageIndex) => {
                      const IconComponent = advantage.icon
                      return (
                        <div key={advantageIndex} className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50">
                          <IconComponent className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium">{advantage.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              了解详细服务
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
