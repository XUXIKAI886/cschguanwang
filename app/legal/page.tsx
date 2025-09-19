import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "隐私政策与服务条款 - 呈尚策划",
  description: "呈尚策划隐私政策与服务条款，了解我们如何保护您的个人信息和服务条款。",
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">隐私政策与服务条款</h1>
          <p className="text-muted-foreground">
            我们致力于保护您的隐私和权益
          </p>
        </div>

        <div className="space-y-8">
          {/* 隐私政策 */}
          <Card>
            <CardHeader>
              <CardTitle>隐私政策</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3>信息收集</h3>
              <p>
                我们仅收集为您提供服务所必需的信息，包括但不限于：
              </p>
              <ul>
                <li>门店基本信息（名称、地址、联系方式）</li>
                <li>运营数据（销售数据、用户行为数据）</li>
                <li>联系方式（电话、微信、邮箱）</li>
              </ul>

              <h3>信息使用</h3>
              <p>
                我们承诺仅将您的信息用于以下目的：
              </p>
              <ul>
                <li>提供代运营服务</li>
                <li>数据分析和优化建议</li>
                <li>客户服务和技术支持</li>
                <li>发送服务相关通知</li>
              </ul>

              <h3>信息保护</h3>
              <p>
                我们采用以下措施保护您的信息安全：
              </p>
              <ul>
                <li>SSL加密传输</li>
                <li>访问权限控制</li>
                <li>定期安全审计</li>
                <li>员工保密协议</li>
              </ul>

              <h3>信息共享</h3>
              <p>
                我们不会向第三方出售、交易或转让您的个人信息，除非：
              </p>
              <ul>
                <li>获得您的明确同意</li>
                <li>法律法规要求</li>
                <li>保护我们的权利和安全</li>
              </ul>
            </CardContent>
          </Card>

          {/* 服务条款 */}
          <Card>
            <CardHeader>
              <CardTitle>服务条款</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3>服务范围</h3>
              <p>
                呈尚策划提供的服务包括但不限于：
              </p>
              <ul>
                <li>外卖平台店铺运营</li>
                <li>视觉设计和品牌包装</li>
                <li>数据分析和策略优化</li>
                <li>营销推广和活动策划</li>
              </ul>

              <h3>服务承诺</h3>
              <p>
                我们承诺：
              </p>
              <ul>
                <li>提供专业的运营服务</li>
                <li>定期提供数据报告</li>
                <li>7*12小时客户服务</li>
                <li>对服务效果负责</li>
              </ul>

              <h3>客户义务</h3>
              <p>
                客户需要：
              </p>
              <ul>
                <li>提供真实准确的店铺信息</li>
                <li>配合我们的运营工作</li>
                <li>按时支付服务费用</li>
                <li>遵守平台相关规则</li>
              </ul>

              <h3>免责声明</h3>
              <p>
                以下情况我们不承担责任：
              </p>
              <ul>
                <li>因平台政策变化导致的影响</li>
                <li>因不可抗力导致的服务中断</li>
                <li>客户违规操作导致的后果</li>
                <li>第三方原因导致的损失</li>
              </ul>

              <h3>争议解决</h3>
              <p>
                如发生争议，双方应友好协商解决。协商不成的，
                可向合同签订地人民法院提起诉讼。
              </p>
            </CardContent>
          </Card>

          {/* 联系方式 */}
          <Card>
            <CardHeader>
              <CardTitle>联系我们</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                如对本政策和条款有任何疑问，请联系我们：
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>邮箱：</strong>legal@chengshang.com</p>
                <p><strong>电话：</strong>400-1234-5678</p>
                <p><strong>地址：</strong>上海市浦东新区张江高科技园区</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>本政策最后更新时间：2025年9月19日</p>
        </div>
      </div>
    </div>
  )
}
