"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "首页", href: "/" },
    { name: "服务", href: "/services" },
    { name: "解决方案", href: "/solutions" },
    { name: "成功案例", href: "/cases" },
    { name: "价格套餐", href: "/pricing" },
    { name: "合作流程", href: "/process" },
    { name: "运营知识", href: "/insights" },
    { name: "关于我们", href: "/about" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-md font-bold">
            呈
          </div>
          <span className="text-xl font-bold text-foreground">呈尚策划</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:400-1234-5678"
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="w-4 h-4" />
            <span>400-1234-5678</span>
          </a>
          <Button asChild>
            <Link href="/contact">免费诊断</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="切换菜单"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t space-y-4">
              <a
                href="tel:400-1234-5678"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>400-1234-5678</span>
              </a>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  免费诊断
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
