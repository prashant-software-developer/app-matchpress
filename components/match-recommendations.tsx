"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MessageSquare, Users, TrendingUp, Star } from "lucide-react"

export function MatchRecommendations() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const matches = [
    {
      id: 1,
      name: "Tech Weekly Digest",
      description: "Weekly roundup of the latest tech news and trends",
      audience: "15.2K",
      category: "Technology",
      matchScore: 94,
      tags: ["SaaS", "AI", "Startups"],
      engagement: "4.2%",
      frequency: "Weekly",
      featured: true,
    },
    {
      id: 2,
      name: "Marketing Insights",
      description: "Data-driven marketing strategies and case studies",
      audience: "8.7K",
      category: "Marketing",
      matchScore: 89,
      tags: ["Digital Marketing", "Analytics", "Growth"],
      engagement: "3.8%",
      frequency: "Bi-weekly",
      featured: false,
    },
    {
      id: 3,
      name: "Startup Stories",
      description: "Inspiring stories from successful entrepreneurs",
      audience: "22.1K",
      category: "Business",
      matchScore: 87,
      tags: ["Entrepreneurship", "Funding", "Leadership"],
      engagement: "5.1%",
      frequency: "Weekly",
      featured: true,
    },
    {
      id: 4,
      name: "Design Trends",
      description: "Latest UI/UX trends and design inspiration",
      audience: "12.5K",
      category: "Design",
      matchScore: 82,
      tags: ["UI/UX", "Web Design", "Mobile"],
      engagement: "4.7%",
      frequency: "Weekly",
      featured: false,
    },
    {
      id: 5,
      name: "Finance Focus",
      description: "Personal finance tips and investment strategies",
      audience: "18.9K",
      category: "Finance",
      matchScore: 78,
      tags: ["Investing", "Personal Finance", "Crypto"],
      engagement: "3.5%",
      frequency: "Daily",
      featured: false,
    },
    {
      id: 6,
      name: "Health & Wellness",
      description: "Evidence-based health and wellness advice",
      audience: "25.3K",
      category: "Health",
      matchScore: 75,
      tags: ["Nutrition", "Fitness", "Mental Health"],
      engagement: "4.9%",
      frequency: "Bi-weekly",
      featured: false,
    },
  ]

  const filteredMatches = matches.filter((match) => {
    const matchesSearch =
      match.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || match.category.toLowerCase() === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Match Recommendations</h1>
        <p className="text-gray-600 mt-2">Discover newsletter partners that align with your audience and content</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search newsletters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="health">Health</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Match Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMatches.map((match) => (
          <Card key={match.id} className={`relative ${match.featured ? "ring-2 ring-amber-200" : ""}`}>
            {match.featured && (
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-amber-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{match.name}</CardTitle>
                  <CardDescription className="mt-1">{match.description}</CardDescription>
                </div>
                <div className="text-right ml-4">
                  <div className="text-2xl font-bold text-indigo-600">{match.matchScore}%</div>
                  <div className="text-xs text-gray-500">match score</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <Users className="w-4 h-4 mr-1" />
                    </div>
                    <div className="font-semibold text-gray-900">{match.audience}</div>
                    <div className="text-xs text-gray-500">subscribers</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                    </div>
                    <div className="font-semibold text-gray-900">{match.engagement}</div>
                    <div className="text-xs text-gray-500">engagement</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{match.frequency}</div>
                    <div className="text-xs text-gray-500">frequency</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                    {match.category}
                  </Badge>
                  {match.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No matches found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  )
}
