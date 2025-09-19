import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, TrendingUp, Users, Star, ArrowRight, Calendar } from "lucide-react"

export function InsightsSection() {
  const featuredArticles = [
    {
      title: "饿了么店铺分快速提升攻略",
      excerpt: "详解店铺分算法机制，提供10+实用提升技巧，帮助商户快速提升店铺分至80+",
      category: "饿了么运营",
      readTime: "8分钟",
      views: "1.2万",
      platform: "饿了么",
      icon: "🍜"
    },
    {
      title: "美团天天神券配置策略",
      excerpt: "深度解析神券机制，从券面设计到投放策略，全方位提升转化率",
      category: "美团运营", 
      readTime: "6分钟",
      views: "8.5千",
      platform: "美团",
      icon: "🛵"
    },
    {
      title: "外卖新店7天快速起量方法",
      excerpt: "新店冷启动完整攻略，从开业准备到流量获取，让新店快速度过冷启动期",
      category: "运营技巧",
      readTime: "12分钟", 
      views: "2.1万",
      platform: "通用",
      icon: "🚀"
    }
  ]

  const downloadResources = [
    {
      title: "《外卖爆单秘籍》",
      description: "100页深度指南，涵盖双平台运营全流程",
      format: "PDF",
      size: "15MB",
      downloads: "5000+",
      icon: "📚"
    },
    {
      title: "代运营服务介绍手册",
      description: "详细服务内容、案例展示、合作流程",
      format: "PDF", 
      size: "8MB",
      downloads: "3200+",
      icon: "📋"
    }
  ]

  const knowledgeCategories = [
    { name: "饿了么专题", count: 25, icon: "🍜" },
    { name: "美团专题", count: 32, icon: "🛵" },
    { name: "运营技巧", count: 18, icon: "💡" },
    { name: "数据分析", count: 12, icon: "📊" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            运营知识中心
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            深度运营干货，助您掌握外卖运营精髓
          </p>
        </div>

        {/* 知识分类 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {knowledgeCategories.map((category, index) => (
            <Card key={index} className="text-center group hover:shadow-md transition-all cursor-pointer">
              <CardContent className="p-4">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-semibold text-sm">{category.name}</div>
                <div className="text-xs text-muted-foreground">{category.count}篇文章</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 精选文章 */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">精选干货文章</h3>
            <Button variant="outline" asChild>
              <Link href="/insights">
                查看全部
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl">{article.icon}</div>
                    <Badge variant="secondary">{article.platform}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 下载资源 */}
        <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">免费下载资源</h3>
            <p className="text-muted-foreground">
              提供手机号即可免费下载，获取更多运营干货
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadResources.map((resource, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{resource.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{resource.format}</span>
                          <span>{resource.size}</span>
                          <span className="flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>{resource.downloads}</span>
                          </span>
                        </div>
                        <Button size="sm" asChild>
                          <Link href="/contact?resource=handbook">
                            免费下载
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
