"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageCircle,
  User,
  Store,
  TrendingUp,
  ArrowRight
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    storeName: '',
    city: '',
    storeCount: '',
    category: '',
    dailyOrders: '',
    averagePrice: '',
    currentPlatform: '',
    phone: '',
    wechat: '',
    description: '',
    agreeTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "电话咨询",
      content: "13972539707",
      subtitle: "7*12小时在线客服",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "微信咨询",
      content: "ChengShang2025",
      subtitle: "扫码添加专属顾问",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "邮箱联系",
      content: "contact@chengshang.com",
      subtitle: "24小时内回复",
      color: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "公司地址",
      content: "湖北省宜昌市伍家岗区旭光商贸大厦903",
      subtitle: "欢迎实地考察",
      color: "text-orange-600"
    }
  ]

  const benefits = [
    "免费门店诊断分析",
    "个性化运营方案制定",
    "1个工作日内专家回电",
    "无强制消费承诺",
    "专业团队1对1服务",
    "可视化数据报告"
  ]

  const process = [
    { step: 1, title: "提交诊断申请", desc: "填写门店基本信息" },
    { step: 2, title: "专家分析诊断", desc: "1个工作日内完成分析" },
    { step: 3, title: "电话沟通详情", desc: "专家电话解读分析结果" },
    { step: 4, title: "制定合作方案", desc: "根据需求定制服务方案" }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">提交成功！</h1>
            <p className="text-muted-foreground mb-8">
              感谢您的信任！我们的专家团队已收到您的诊断申请，
              将在1个工作日内完成分析并主动联系您。
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">接下来我们将为您：</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>深度分析门店现状</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>识别增长机会点</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>制定优化建议方案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>提供专业运营指导</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center space-x-2 p-4 border rounded-lg">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-semibold">应急联系</div>
                  <div className="text-sm text-muted-foreground">13972539707</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 p-4 border rounded-lg">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-semibold">微信咨询</div>
                  <div className="text-sm text-muted-foreground">ChengShang2025</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">免费诊断</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              免费门店诊断
              <br />
              <span className="text-primary">专业运营建议</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              专业团队为您提供免费的门店诊断分析，
              识别问题、发现机会、制定增长策略
            </p>
          </div>

          {/* 统计数据 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <User className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">3000+</div>
                <div className="text-sm text-muted-foreground">已诊断商户</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Store className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">问题识别率</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">72%</div>
                <div className="text-sm text-muted-foreground">商户采纳率</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">24小时</div>
                <div className="text-sm text-muted-foreground">响应时间</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左侧表单 */}
            <Card className="order-2 lg:order-1">
              <CardHeader>
                <CardTitle className="text-2xl">门店诊断申请</CardTitle>
                <p className="text-muted-foreground">
                  请详细填写门店信息，我们将为您提供专业的诊断分析
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="storeName">门店名称 *</Label>
                      <Input
                        id="storeName"
                        placeholder="请输入门店名称"
                        value={formData.storeName}
                        onChange={(e) => setFormData({...formData, storeName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">所在城市 *</Label>
                      <Input
                        id="city"
                        placeholder="如：上海"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="storeCount">门店数量</Label>
                      <Select onValueChange={(value) => setFormData({...formData, storeCount: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="选择门店数量" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1家</SelectItem>
                          <SelectItem value="2-5">2-5家</SelectItem>
                          <SelectItem value="6-10">6-10家</SelectItem>
                          <SelectItem value="10+">10家以上</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">主营品类 *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, category: value})} required>
                        <SelectTrigger>
                          <SelectValue placeholder="选择主营品类" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="快餐">快餐</SelectItem>
                          <SelectItem value="茶饮">茶饮</SelectItem>
                          <SelectItem value="川菜">川菜</SelectItem>
                          <SelectItem value="粤菜">粤菜</SelectItem>
                          <SelectItem value="烘焙">烘焙甜品</SelectItem>
                          <SelectItem value="火锅">火锅</SelectItem>
                          <SelectItem value="日韩料理">日韩料理</SelectItem>
                          <SelectItem value="其他">其他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dailyOrders">日均单量</Label>
                      <Select onValueChange={(value) => setFormData({...formData, dailyOrders: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="选择日均单量" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-50">0-50单</SelectItem>
                          <SelectItem value="51-100">51-100单</SelectItem>
                          <SelectItem value="101-300">101-300单</SelectItem>
                          <SelectItem value="301-500">301-500单</SelectItem>
                          <SelectItem value="500+">500单以上</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="averagePrice">客单价</Label>
                      <Select onValueChange={(value) => setFormData({...formData, averagePrice: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="选择客单价范围" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-20">0-20元</SelectItem>
                          <SelectItem value="21-40">21-40元</SelectItem>
                          <SelectItem value="41-60">41-60元</SelectItem>
                          <SelectItem value="61-100">61-100元</SelectItem>
                          <SelectItem value="100+">100元以上</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentPlatform">当前使用平台 *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, currentPlatform: value})} required>
                      <SelectTrigger>
                        <SelectValue placeholder="选择当前使用的平台" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="饿了么">仅饿了么</SelectItem>
                        <SelectItem value="美团">仅美团</SelectItem>
                        <SelectItem value="双平台">饿了么+美团</SelectItem>
                        <SelectItem value="其他">其他平台</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">手机号 *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="请输入手机号"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="wechat">微信号</Label>
                      <Input
                        id="wechat"
                        placeholder="便于后续沟通"
                        value={formData.wechat}
                        onChange={(e) => setFormData({...formData, wechat: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">主要问题或目标</Label>
                    <Textarea
                      id="description"
                      placeholder="请简述您希望解决的问题或想要达到的目标"
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="agreeTerms" className="text-sm leading-5">
                      我已阅读并同意《隐私政策》和《服务条款》，
                      同意呈尚策划收集和使用我的个人信息用于提供咨询服务
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "提交中..." : "立即提交免费诊断申请"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* 右侧信息 */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* 服务承诺 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">服务承诺</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* 服务流程 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">服务流程</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {process.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 联系方式 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">其他联系方式</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {contactInfo.map((contact, index) => {
                      const IconComponent = contact.icon
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <IconComponent className={`w-5 h-5 ${contact.color}`} />
                          <div>
                            <div className="font-semibold text-sm">{contact.title}</div>
                            <div className="text-sm">{contact.content}</div>
                            <div className="text-xs text-muted-foreground">{contact.subtitle}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
