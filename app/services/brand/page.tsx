import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Palette,
  Camera,
  FileImage,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Eye,
  MousePointer,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "视觉与品牌服务 - 外卖店铺视觉设计专家",
  description: "专业的外卖店铺视觉设计服务，包括门店装修、菜品拍摄、品牌VI设计，提升点击率45%+，转化率35%+。",
  keywords: "外卖视觉设计,店铺装修,菜品拍摄,品牌设计,视觉营销"
}

export default function BrandPage() {
  const services = [
    {
      title: "门店装修设计",
      description: "专业的门店视觉设计，提升品牌形象和用户信任度",
      icon: Palette,
      color: "bg-purple-100 text-purple-600",
      features: [
        "首页Banner设计",
        "店铺背景设计", 
        "分类图标定制",
        "活动海报制作",
        "品牌logo应用"
      ],
      result: "点击率提升45%+"
    },
    {
      title: "菜品拍摄美化",
      description: "专业摄影团队，让每道菜品都成为销售利器",
      icon: Camera,
      color: "bg-green-100 text-green-600",
      features: [
        "专业摄影拍摄",
        "后期精修美化",
        "场景搭配设计",
        "多角度展示",
        "标准化流程"
      ],
      result: "菜品转化率+60%"
    },
    {
      title: "品牌VI规范",
      description: "建立统一的品牌视觉识别系统，提升品牌认知度",
      icon: FileImage,
      color: "bg-blue-100 text-blue-600",
      features: [
        "品牌色彩规范",
        "字体使用规范",
        "Logo使用指南",
        "包装设计规范",
        "宣传物料模板"
      ],
      result: "品牌识别度+80%"
    },
    {
      title: "营销物料制作",
      description: "各类营销活动的视觉物料设计制作",
      icon: Sparkles,
      color: "bg-orange-100 text-orange-600",
      features: [
        "活动海报设计",
        "优惠券设计",
        "朋友圈素材",
        "宣传单页制作",
        "包装贴纸设计"
      ],
      result: "营销效果+50%"
    }
  ]

  const beforeAfter = [
    {
      category: "茶饮门店",
      before: {
        issues: ["背景杂乱", "配色不统一", "信息混乱"],
        metrics: { click: "2.3%", conversion: "8.5%" }
      },
      after: {
        improvements: ["视觉统一", "重点突出", "信息清晰"],
        metrics: { click: "4.1%", conversion: "13.8%" }
      }
    },
    {
      category: "川菜餐厅",
      before: {
        issues: ["图片模糊", "无品牌感", "缺乏吸引力"],
        metrics: { click: "1.8%", conversion: "6.2%" }
      },
      after: {
        improvements: ["高清美图", "品牌突出", "视觉冲击"],
        metrics: { click: "3.6%", conversion: "11.5%" }
      }
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">视觉设计专家</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              专业视觉设计
              <br />
              <span className="text-primary">让您的店铺脱颖而出</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              专业的视觉设计团队，从门店装修到菜品拍摄，
              全方位提升您的品牌形象和用户体验
            </p>
          </div>

          {/* 核心数据 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Eye className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">45%+</div>
                <div className="text-sm text-muted-foreground">点击率提升</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <MousePointer className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">35%+</div>
                <div className="text-sm text-muted-foreground">转化率提升</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">60%+</div>
                <div className="text-sm text-muted-foreground">品牌认知提升</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 服务详情 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              四大视觉服务体系
            </h2>
            <p className="text-xl text-muted-foreground">
              全面提升您的品牌视觉表现
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
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
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">服务内容</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3">
                        <div className="text-primary font-bold">{service.result}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 效果对比 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              效果对比
            </h2>
            <p className="text-xl text-muted-foreground">
              真实案例展示视觉优化效果
            </p>
          </div>

          <div className="space-y-12">
            {beforeAfter.map((case_, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-purple-500/5">
                  <CardTitle className="text-center">{case_.category}优化案例</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* 优化前 */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-600">优化前</h3>
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">存在问题</h4>
                        <ul className="space-y-1">
                          {case_.before.issues.map((issue, iIndex) => (
                            <li key={iIndex} className="text-sm text-red-700">• {issue}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-red-100 rounded-lg">
                          <div className="text-lg font-bold text-red-600">{case_.before.metrics.click}</div>
                          <div className="text-xs text-red-700">点击率</div>
                        </div>
                        <div className="text-center p-3 bg-red-100 rounded-lg">
                          <div className="text-lg font-bold text-red-600">{case_.before.metrics.conversion}</div>
                          <div className="text-xs text-red-700">转化率</div>
                        </div>
                      </div>
                    </div>

                    {/* 优化后 */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-600">优化后</h3>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">改进效果</h4>
                        <ul className="space-y-1">
                          {case_.after.improvements.map((improvement, iIndex) => (
                            <li key={iIndex} className="text-sm text-green-700">• {improvement}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-100 rounded-lg">
                          <div className="text-lg font-bold text-green-600">{case_.after.metrics.click}</div>
                          <div className="text-xs text-green-700">点击率</div>
                        </div>
                        <div className="text-center p-3 bg-green-100 rounded-lg">
                          <div className="text-lg font-bold text-green-600">{case_.after.metrics.conversion}</div>
                          <div className="text-xs text-green-700">转化率</div>
                        </div>
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
            让专业团队为您打造视觉营销利器
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            专业摄影师+资深设计师，为您的外卖店铺打造吸睛视觉
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              立即咨询视觉设计
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
