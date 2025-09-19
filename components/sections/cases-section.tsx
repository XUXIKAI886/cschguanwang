import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Star, Users, ShoppingCart, ArrowRight } from "lucide-react"

export function CasesSection() {
  const successCases = [
    {
      title: "某连锁茶饮品牌",
      category: "茶饮连锁",
      location: "上海",
      period: "3个月",
      description: "新品牌快速冷启动，通过双平台协同运营快速获得市场认知",
      platforms: ["饿了么", "美团"],
      results: [
        { metric: "日均单量", before: "150单", after: "580单", growth: "+287%" },
        { metric: "月销售额", before: "45万", after: "174万", growth: "+287%" },
        { metric: "店铺评分", before: "4.2", after: "4.8", growth: "+0.6" },
        { metric: "复购率", before: "15%", after: "42%", growth: "+180%" }
      ],
      highlights: [
        "7天流量卡充分利用，获得首轮曝光",
        "菜单结构优化，提升客单价35%",
        "口碑运营体系建立，好评率达96%"
      ],
      image: "🧋"
    },
    {
      title: "传统川菜老店",
      category: "川菜餐厅", 
      location: "成都",
      period: "6个月",
      description: "传统餐厅数字化转型，通过专业运营重新焕发活力",
      platforms: ["饿了么", "美团"],
      results: [
        { metric: "月订单量", before: "800单", after: "2400单", growth: "+200%" },
        { metric: "客单价", before: "58元", after: "78元", growth: "+34%" },
        { metric: "店铺分", before: "68分", after: "83分", growth: "+15分" },
        { metric: "搜索排名", before: "第3页", after: "前5名", growth: "大幅提升" }
      ],
      highlights: [
        "菜品拍摄重新包装，提升视觉吸引力",
        "搜索关键词优化，获得更多免费流量",
        "营销策略调整，ROI提升至1:4.2"
      ],
      image: "🌶️"
    },
    {
      title: "新式烘焙工坊",
      category: "烘焙甜品",
      location: "杭州", 
      period: "4个月",
      description: "网红烘焙品牌标准化运营，实现多城市快速复制",
      platforms: ["饿了么", "美团"],
      results: [
        { metric: "门店数量", before: "2家", after: "8家", growth: "+300%" },
        { metric: "单店日均", before: "220单", after: "450单", growth: "+105%" },
        { metric: "品牌知名度", before: "本地化", after: "区域化", growth: "显著提升" },
        { metric: "标准化程度", before: "30%", after: "95%", growth: "+65%" }
      ],
      highlights: [
        "建立标准化运营SOP，支持快速扩张",
        "双平台数据整合分析，优化选址策略",
        "统一品牌视觉，提升品牌识别度"
      ],
      image: "🧁"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            成功案例展示
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            看看我们如何帮助不同类型的餐饮商户实现增长目标
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {successCases.map((caseItem, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl">{caseItem.image}</div>
                  <div className="flex gap-1">
                    {caseItem.platforms.map((platform, pIndex) => (
                      <Badge key={pIndex} variant="secondary" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Badge variant="outline">{caseItem.category}</Badge>
                  <span>•</span>
                  <span>{caseItem.location}</span>
                  <span>•</span>
                  <span>{caseItem.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{caseItem.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* 核心指标 */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">核心指标提升</h4>
                  {caseItem.results.slice(0, 2).map((result, rIndex) => (
                    <div key={rIndex} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="text-sm font-medium">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">
                          {result.before} → {result.after}
                        </div>
                      </div>
                      <div className="text-green-600 font-bold text-sm">
                        {result.growth}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 关键亮点 */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">关键策略</h4>
                  <ul className="space-y-1">
                    {caseItem.highlights.slice(0, 2).map((highlight, hIndex) => (
                      <li key={hIndex} className="text-xs text-muted-foreground flex items-start space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 更多案例统计 */}
        <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm text-muted-foreground">客户选择续约</div>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-sm text-muted-foreground">客户满意度评分</div>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">72%</div>
              <div className="text-sm text-muted-foreground">客户推荐率</div>
            </div>
            <div>
              <ShoppingCart className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">3.2倍</div>
              <div className="text-sm text-muted-foreground">平均业绩增长</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/cases">
              查看更多案例
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
