import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Star, DollarSign, Eye, ShoppingCart, MessageSquare, Award } from "lucide-react"

export function StatsSection() {
  const mainStats = [
    {
      icon: TrendingUp,
      value: "30%+",
      label: "曝光提升",
      description: "饿了么平台平均曝光增长",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: ShoppingCart,
      value: "25%-30%",
      label: "转化率提升",
      description: "美团平台转化率增长区间",
      color: "text-blue-600", 
      bgColor: "bg-blue-100"
    },
    {
      icon: Star,
      value: "4.8/4.7",
      label: "平台评分",
      description: "饿了么/美团平均评分标准",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: DollarSign,
      value: "1:3",
      label: "ROI回报",
      description: "投入产出比样例区间",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]

  const detailStats = [
    {
      category: "服务规模",
      items: [
        { label: "累计服务店铺", value: "3000+", icon: Users },
        { label: "认证运营团队", value: "50+", icon: Award },
        { label: "覆盖城市", value: "100+", icon: Eye },
        { label: "服务年限", value: "5年", icon: Star }
      ]
    },
    {
      category: "运营成果",
      items: [
        { label: "店铺分提升", value: "+10~15分", icon: TrendingUp },
        { label: "好评率", value: "≥95%", icon: MessageSquare },
        { label: "客户续约率", value: "85%+", icon: Users },
        { label: "新店冷启动", value: "7天上量", icon: Star }
      ]
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            可度量的成功指标
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            我们用数据说话
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            每一个指标都是对客户承诺的兑现，透明化的数据展示让合作更有信心
          </p>
        </div>

        {/* 主要指标展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${stat.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-black mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="font-bold text-gray-900 mb-3 text-lg">{stat.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 详细统计 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {detailStats.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => {
                    const IconComponent = item.icon
                    return (
                      <div key={itemIndex} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 免责声明 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-white/60 rounded-lg p-4 max-w-4xl mx-auto">
            * 以上数据为样例区间，非保证性承诺。实际效果因行业、地区、竞争环境等因素而异。
            我们将根据您的具体情况制定个性化的运营策略和目标。
          </p>
        </div>
      </div>
    </section>
  )
}
