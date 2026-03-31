"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: "首页", href: "/" },
    { 
      name: "服务", 
      href: "/services",
      children: [
        { name: "双平台代运营", href: "/services/omni" },
        { name: "视觉与品牌", href: "/services/brand" },
        { name: "数据与增长", href: "/services/data" }
      ]
    },
    { name: "成功案例", href: "/cases" },
    { name: "运营知识", href: "/insights" },
    { name: "关于我们", href: "/about" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-105 transition-transform">
              呈
            </div>
            <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <span className="text-xl font-black text-foreground">呈尚策划</span>
            <span className="hidden sm:block text-xs text-muted-foreground">外卖双平台代运营专家</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-card"
              >
                {item.name}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>
              
              {/* 下拉菜单 */}
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-56 p-2 rounded-2xl bg-card border border-border shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors group/item"
                      >
                        {child.name}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:13972539707"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-medium">13972539707</span>
          </a>
          <Button asChild className="h-10 px-6 font-semibold glow-primary">
            <Link href="/contact">
              免费诊断
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="切换菜单"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
          <nav className="container mx-auto px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-foreground font-medium hover:bg-card transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-6 mt-4 border-t border-border space-y-4">
              <a
                href="tel:13972539707"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-foreground font-medium bg-card"
              >
                <Phone className="w-4 h-4" />
                <span>13972539707</span>
              </a>
              <Button asChild className="w-full h-12 font-semibold">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  免费诊断
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
