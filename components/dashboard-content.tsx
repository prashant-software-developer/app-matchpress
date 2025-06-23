"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, MessageSquare, Target } from "lucide-react"

export function DashboardContent() {
  const stats = [
    {
      title: "Active Matches",
      value: "12",
      change: "+2 this week",
      icon: Target,
      color: "text-indigo-600",
    },
    {
      title: "Total Reach",
      value: "45.2K",
      change: "+12% from last month",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Messages Sent",
      value: "28",
      change: "+5 this week",
      icon: MessageSquare,
      color: "text-blue-600",
    },
    {
      title: "Response Rate",
      value: "68%",
      change: "+8% improvement",
      icon: TrendingUp,
      color: "text-amber-600",
    },
  ]

  const recentMatches = [
    {
      name: "Tech Weekly Digest",
      audience: "15.2K",
      matchScore: 94,
      category: "Technology",
      status: "pending",
    },
    {
      name: "Marketing Insights",
      audience: "8.7K",
      matchScore: 89,
      category: "Marketing",
      status: "connected",
    },
    {
      name: "Startup Stories",
      audience: "22.1K",
      matchScore: 87,
      category: "Business",
      status: "pending",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your newsletter partnerships</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Matches */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Matches</CardTitle>
            <CardDescription>Your latest newsletter partnership opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMatches.map((match, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{match.name}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-gray-500">{match.audience} subscribers</span>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                        {match.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{match.matchScore}% match</p>
                      <Badge
                        variant={match.status === "connected" ? "default" : "secondary"}
                        className={match.status === "connected" ? "bg-green-100 text-green-800" : ""}
                      >
                        {match.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700">View All Matches</Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started with your newsletter partnerships</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start bg-indigo-600 hover:bg-indigo-700">
              <Target className="w-4 h-4 mr-2" />
              Find New Matches
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MessageSquare className="w-4 h-4 mr-2" />
              Generate Outreach Message
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              View Partnership Analytics
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="w-4 h-4 mr-2" />
              Upgrade to Pro
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
