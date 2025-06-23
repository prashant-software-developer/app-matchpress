"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Activity, DollarSign, TrendingUp, Search, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function AdminPanel() {
  const [searchTerm, setSearchTerm] = useState("")

  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12% from last month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Matches",
      value: "1,234",
      change: "+8% from last month",
      icon: Activity,
      color: "text-green-600",
    },
    {
      title: "Monthly Revenue",
      value: "$24,567",
      change: "+15% from last month",
      icon: DollarSign,
      color: "text-indigo-600",
    },
    {
      title: "Success Rate",
      value: "68%",
      change: "+3% from last month",
      icon: TrendingUp,
      color: "text-amber-600",
    },
  ]

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      newsletter: "Tech Weekly",
      subscribers: "15.2K",
      plan: "Pro",
      status: "active",
      joinDate: "2024-01-15",
      matches: 12,
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      newsletter: "Marketing Insights",
      subscribers: "8.7K",
      plan: "Free",
      status: "active",
      joinDate: "2024-02-03",
      matches: 5,
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      newsletter: "Startup Stories",
      subscribers: "22.1K",
      plan: "Enterprise",
      status: "inactive",
      joinDate: "2023-11-20",
      matches: 28,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      newsletter: "Design Trends",
      subscribers: "12.5K",
      plan: "Pro",
      status: "active",
      joinDate: "2024-01-28",
      matches: 18,
    },
    {
      id: 5,
      name: "Alex Wilson",
      email: "alex@example.com",
      newsletter: "Finance Focus",
      subscribers: "18.9K",
      plan: "Pro",
      status: "active",
      joinDate: "2024-02-10",
      matches: 15,
    },
  ]

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.newsletter.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleUserStatus = (userId: number) => {
    // In a real app, this would make an API call
    console.log(`Toggling status for user ${userId}`)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600 mt-2">Manage users, matches, and platform analytics</p>
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

      {/* Users Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage user accounts and their status</CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Newsletter</TableHead>
                <TableHead>Subscribers</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Matches</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{user.newsletter}</div>
                  </TableCell>
                  <TableCell>{user.subscribers}</TableCell>
                  <TableCell>
                    <Badge
                      variant={user.plan === "Enterprise" ? "default" : user.plan === "Pro" ? "secondary" : "outline"}
                      className={
                        user.plan === "Enterprise"
                          ? "bg-purple-100 text-purple-800"
                          : user.plan === "Pro"
                            ? "bg-indigo-100 text-indigo-800"
                            : "bg-gray-100 text-gray-800"
                      }
                    >
                      {user.plan}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.matches}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Switch checked={user.status === "active"} onCheckedChange={() => toggleUserStatus(user.id)} />
                      <Badge
                        variant={user.status === "active" ? "default" : "secondary"}
                        className={user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                      >
                        {user.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
