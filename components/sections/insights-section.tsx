"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, ArrowRight, Clock, Eye, FileText } from "lucide-react"

export function InsightsSection() {
  const featuredArticles = [
    {
      title: "饿了么店铺分快速提升攻略",
      excerpt: "详解店铺分算法机制，提供10+实用提升技巧，帮助商户快速提升店铺分至80+",
      category: "饿了么运营",
      readTime: "8分钟",
      views: "1.2万",
      platform: "eleme",
      featured: true
    },
    {
      title: "美团天天神券配置策略",
      excerpt: "深度解析神券机制，从券面设计到投放策略，全方位提升转化率",
      category: "美团运营",
      readTime: "6分钟",
      views: "8.5千",
      platform: "meituan",
      featured: false
    },
    {
      title: "外卖新店7天快速起量方法",
      excerpt: "新店冷启动完整攻略，从开业准备到流量获取，让新店快速度过冷启动期",
      category: "运营技巧",
      readTime: "12分钟",
      views: "2.1万",
      platform: "general",
      featured: false
    }
  ]

  const downloadResources = [
    {
      title: "《外卖爆单秘籍》",
      description: "100页深度指南，涵盖双平台运营全流程",
      format: "PDF",
      size: "15MB",
      downloads: "5000+"
    },
    {
      title: "代运营服务介绍手册",
      description: "详细服务内容、案例展示、合作流程",
      format: "PDF",
      size: "8MB",
      downloads: "3200+"
    }
  ]

  const knowledgeCategories = [
    { name: "饿了么专题", count: 25, color: "bg-[hsl(var(--eleme-blue))]" },
    { name: "美团专题", count: 32, color: "bg-[hsl(var(--meituan-yellow))]" },
    { name: "运营技巧", count: 18, color: "bg-primary" },
    { name: "数据分析", count: 12, color: "bg-[hsl(var(--success))]" }
  ]

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        {/* 标题 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">深度运营干货</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-4">
              <span className="text-foreground">运营</span>
              <span className="text-gradient-primary">知识</span>
              <span className="text-foreground">中心</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              助您掌握外卖运营精髓，建立专业运营思维
            </p>
          </div>
          
          <Button variant="outline" size="lg" asChild className="shrink-0 group">
            <Link href="/insights">
              查看全部文章
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* 知识分类 */}
        <div className="flex flex-wrap gap-3 mb-12">
          {knowledgeCategories.map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 hover:bg-card transition-colors group"
            >
              <div className={`w-2 h-2 rounded-full ${category.color}`} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {category.name}
              </span>
              <Badge variant="secondary" className="text-xs">{category.count}</Badge>
            </button>
          ))}
        </div>

        {/* 文章与资源 */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 精选文章 */}
          <div className="lg:col-span-2 space-y-6">
            {featuredArticles.map((article, index) => (
              <article
                key={index}
                className={`group relative rounded-3xl bg-card border border-border overflow-hidden transition-all duration-500 card-hover ${
                  article.featured ? 'p-8' : 'p-6'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          article.platform === 'eleme' 
                            ? 'border-[hsl(var(--eleme-blue))]/30 text-[hsl(var(--eleme-blue))]' 
                            : article.platform === 'meituan'
                            ? 'border-[hsl(var(--meituan-yellow))]/30 text-[hsl(var(--meituan-yellow))]'
                            : 'border-primary/30 text-primary'
                        }`}
                      >
                        {article.category}
                      </Badge>
                      {article.featured && (
                        <Badge className="bg-primary/10 text-primary text-xs">精选</Badge>
                      )}
                    </div>
                    
                    <h3 className={`font-bold text-foreground mb-2 group-hover:text-primary transition-colors ${
                      article.featured ? 'text-2xl' : 'text-lg'
                    }`}>
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </article>
            ))}
          </div>

          {/* 下载资源 */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-orange-500/5 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-foreground">免费资源下载</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                提供手机号即可免费下载，获取更多运营干货
              </p>
              
              <div className="space-y-4">
                {downloadResources.map((resource, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-background/50 border border-border hover:border-primary/30 transition-colors cursor-pointer group"
                  >
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{resource.format}</span>
                        <span>·</span>
                        <span>{resource.size}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-primary">
                        <Download className="w-3 h-3" />
                        <span>{resource.downloads}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-6" asChild>
                <Link href="/contact?resource=handbook">
                  立即获取
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
