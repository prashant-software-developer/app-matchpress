"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Copy, Send, Sparkles, RefreshCw } from "lucide-react"

export function MessageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [generatedMessage, setGeneratedMessage] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const sampleMessage = `Subject: Partnership Opportunity - Cross-Promotion Between Our Newsletters

Hi [Name],

I hope this message finds you well! I'm reaching out because I've been following [Newsletter Name] and I'm impressed by your content on [relevant topic].

I run [Your Newsletter Name], which focuses on [your niche] and has [subscriber count] engaged subscribers. I noticed we share a similar audience interested in [common interests], and I think there could be a great opportunity for us to collaborate.

I'd love to explore a cross-promotion partnership where we could:
- Feature each other's newsletters in our upcoming editions
- Share valuable content that would benefit both our audiences
- Potentially collaborate on a joint piece or series

Our recent newsletters have achieved [engagement metric]% engagement rates, and I believe our audiences would find genuine value in discovering each other's content.

Would you be interested in discussing this further? I'd be happy to share more details about our newsletter and explore how we might work together.

Looking forward to hearing from you!

Best regards,
[Your Name]
[Your Newsletter Name]
[Contact Information]`

      setGeneratedMessage(sampleMessage)
      setIsGenerating(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage)
  }

  const templates = [
    {
      title: "Partnership Proposal",
      description: "Professional outreach for cross-promotion opportunities",
      prompt:
        "I want to propose a newsletter cross-promotion partnership focusing on mutual audience growth and value exchange.",
    },
    {
      title: "Content Collaboration",
      description: "Invite collaboration on joint content creation",
      prompt: "I'd like to collaborate on creating joint content that would benefit both our newsletter audiences.",
    },
    {
      title: "Audience Exchange",
      description: "Simple subscriber base sharing proposal",
      prompt:
        "I want to propose a simple audience exchange where we mention each other's newsletters to our subscribers.",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Message Generator</h1>
        <p className="text-gray-600 mt-2">Create personalized outreach messages with AI assistance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-amber-500" />
                Message Prompt
              </CardTitle>
              <CardDescription>
                Describe what you want to say and our AI will craft a professional message
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="prompt">What do you want to say?</Label>
                <Textarea
                  id="prompt"
                  placeholder="e.g., I want to propose a newsletter partnership for cross-promotion with a focus on our shared audience in the tech industry..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="mt-2"
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Message
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Templates */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Templates</CardTitle>
              <CardDescription>Use these templates to get started quickly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setPrompt(template.prompt)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{template.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      Use
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Output Section */}
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Generated Message</CardTitle>
              <CardDescription>Your AI-generated outreach message ready to send</CardDescription>
            </CardHeader>
            <CardContent>
              {generatedMessage ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm text-gray-900 font-mono">{generatedMessage}</pre>
                  </div>

                  <div className="flex space-x-3">
                    <Button onClick={handleCopy} variant="outline" className="flex-1">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Message
                    </Button>
                    <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>

                  <div className="text-center">
                    <Button
                      variant="ghost"
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="text-indigo-600 hover:text-indigo-700"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Regenerate
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Sparkles className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to generate</h3>
                  <p className="text-gray-600">
                    Enter your message prompt and click generate to create your outreach message
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
