"use client"

import { LayoutDashboard, Users, MessageSquare, CreditCard, Settings, LogOut, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "matches", label: "Matches", icon: Users, badge: "3" },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "pricing", label: "Billing", icon: CreditCard },
    { id: "admin", label: "Admin", icon: Settings },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">NM</span>
          </div>
          <span className="font-semibold text-gray-900">Newsletter Matchmaker</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={currentPage === item.id ? "default" : "ghost"}
            className={`w-full justify-start ${
              currentPage === item.id
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(item.id)}
          >
            <item.icon className="w-4 h-4 mr-3" />
            {item.label}
            {item.badge && (
              <Badge variant="secondary" className="ml-auto bg-amber-100 text-amber-800">
                {item.badge}
              </Badge>
            )}
          </Button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-sm font-medium">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Bell className="w-4 h-4" />
          </Button>
        </div>
        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100">
          <LogOut className="w-4 h-4 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  )
}
