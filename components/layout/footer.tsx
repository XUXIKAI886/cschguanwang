import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react"

export function Footer() {
  const footerLinks = [
    {
      title: "服务项目",
      links: [
        { name: "双平台代运营", href: "/services/omni" },
        { name: "视觉与品牌", href: "/services/brand" },
        { name: "数据与增长", href: "/services/data" },
        { name: "行业解决方案", href: "/solutions" }
      ]
    },
    {
      title: "资源中心",
      links: [
        { name: "运营知识库", href: "/insights" },
        { name: "成功案例", href: "/cases" },
        { name: "合作流程", href: "/process" },
        { name: "价格套餐", href: "/pricing" }
      ]
    },
    {
      title: "联系我们",
      links: [
        { name: "免费诊断", href: "/contact" },
        { name: "关于我们", href: "/about" },
        { name: "隐私政策", href: "/legal" },
        { name: "服务条款", href: "/legal" }
      ]
    }
  ]

  return (
    <footer className="relative bg-muted/30 border-t border-border overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* 公司信息 */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-lg">
                呈
              </div>
              <div>
                <span className="text-2xl font-black text-foreground">呈尚策划</span>
                <p className="text-sm text-muted-foreground">外卖双平台代运营专家</p>
              </div>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              专业的外卖双平台代运营服务商，致力于为餐饮商户提供全方位的运营解决方案，让订单与口碑同步增长。
            </p>
            
            <div className="space-y-3">
              <a 
                href="tel:13972539707" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">13972539707</span>
              </a>
              <a 
                href="mailto:contact@chengshang.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@chengshang.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>湖北省宜昌市伍家岗区旭光商贸大厦903</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span>周一至周日 9:00-21:00</span>
              </div>
            </div>
          </div>

          {/* 链接列表 */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部版权 */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 呈尚策划. 保留所有权利.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/legal" className="hover:text-foreground transition-colors">
              隐私政策
            </Link>
            <Link href="/legal" className="hover:text-foreground transition-colors">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
