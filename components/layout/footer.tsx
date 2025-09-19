import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-md font-bold">
                呈
              </div>
              <span className="text-xl font-bold">呈尚策划</span>
            </div>
            <p className="text-sm text-muted-foreground">
              专业的外卖双平台代运营服务商，致力于为餐饮商户提供全方位的运营解决方案。
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>400-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@chengshang.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>上海市浦东新区张江高科技园区</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>周一至周日 9:00-21:00</span>
              </div>
            </div>
          </div>

          {/* 服务项目 */}
          <div className="space-y-4">
            <h3 className="font-semibold">服务项目</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/omni" className="hover:text-foreground transition-colors">
                  双平台代运营
                </Link>
              </li>
              <li>
                <Link href="/services/brand" className="hover:text-foreground transition-colors">
                  视觉与品牌
                </Link>
              </li>
              <li>
                <Link href="/services/data" className="hover:text-foreground transition-colors">
                  数据与增长
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-foreground transition-colors">
                  行业解决方案
                </Link>
              </li>
            </ul>
          </div>

          {/* 资源中心 */}
          <div className="space-y-4">
            <h3 className="font-semibold">资源中心</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/insights" className="hover:text-foreground transition-colors">
                  运营知识库
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-foreground transition-colors">
                  成功案例
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-foreground transition-colors">
                  合作流程
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  价格套餐
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div className="space-y-4">
            <h3 className="font-semibold">联系我们</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  免费诊断
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-foreground transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-foreground transition-colors">
                  服务条款
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 呈尚策划. 保留所有权利. | 沪ICP备12345678号</p>
        </div>
      </div>
    </footer>
  )
}
