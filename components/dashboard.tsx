"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardContent } from "@/components/dashboard-content"
import { MatchRecommendations } from "@/components/match-recommendations"
import { MessageGenerator } from "@/components/message-generator"
import { PricingPage } from "@/components/pricing-page"
import { AdminPanel } from "@/components/admin-panel"
import { LoginPage } from "@/components/login-page"

export function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />
  }

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardContent />
      case "matches":
        return <MatchRecommendations />
      case "messages":
        return <MessageGenerator />
      case "pricing":
        return <PricingPage />
      case "admin":
        return <AdminPanel />
      default:
        return <DashboardContent />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 overflow-auto">{renderContent()}</main>
    </div>
  )
}
