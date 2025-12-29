"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedPrompts = [
  "What are my top performing campaigns this week?",
  "Which platform has the best ROAS?",
  "Show me campaigns with declining performance",
  "Generate a budget reallocation recommendation",
  "What audiences should I target for better conversions?",
  "Compare Meta vs Google Ads performance",
];

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm your AI advertising assistant. I can help you analyze campaign performance, provide insights, and make recommendations to optimize your ad spend across Meta, Google, TikTok, and YouTube.\n\nWhat would you like to know about your campaigns today?",
    timestamp: new Date(),
  },
];

/**
 * AI Assistant page with interactive chat interface
 */
export default function AssistantPage() {
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate AI response based on user input
    setTimeout(() => {
      let response = "";
      
      if (userMessage.toLowerCase().includes("top performing") || userMessage.toLowerCase().includes("best campaign")) {
        response = `Based on your current campaign data, here are your top performers:\n\n**1. Retargeting - Cart Abandonment (Meta)**\n- ROAS: 6.8x\n- Conversions: 124\n- Spend: $1,450\n\n**2. Product Launch - Pro (Google Ads)**\n- ROAS: 5.1x\n- Conversions: 72\n- Spend: $2,890\n\n**3. Summer Sale 2024 (Meta)**\n- ROAS: 4.2x\n- Conversions: 89\n- Spend: $4,250\n\nRecommendation: Consider increasing budget for your retargeting campaign as it shows the highest efficiency.`;
      } else if (userMessage.toLowerCase().includes("roas") || userMessage.toLowerCase().includes("return")) {
        response = `Here's your ROAS breakdown by platform:\n\n**Platform Performance:**\n- Meta: 4.8x average ROAS\n- Google Ads: 4.2x average ROAS\n- TikTok: 3.1x average ROAS\n- YouTube: 2.9x average ROAS\n\n**Insight:** Meta is currently delivering the best return on ad spend. However, TikTok shows higher engagement rates (2.16% CTR) which could translate to better brand awareness.`;
      } else if (userMessage.toLowerCase().includes("budget") || userMessage.toLowerCase().includes("reallocation")) {
        response = `Based on performance analysis, here's my recommended budget reallocation:\n\n**Current Allocation:**\n- Meta: 39% ($12,450)\n- Google Ads: 26% ($8,320)\n- YouTube: 20% ($6,200)\n- TikTok: 15% ($4,890)\n\n**Recommended Allocation:**\n- Meta: 42% (+3%)\n- Google Ads: 25% (-1%)\n- TikTok: 20% (+5%)\n- YouTube: 13% (-7%)\n\n**Rationale:** TikTok is showing strong CTR and lower CPM. Shifting budget from YouTube (lower engagement) to TikTok could improve overall performance.`;
      } else if (userMessage.toLowerCase().includes("audience") || userMessage.toLowerCase().includes("target")) {
        response = `Based on conversion data, here are audience recommendations:\n\n**High-Value Audiences:**\n1. **Lookalike - Top Purchasers** (Meta)\n   - Conversion rate: 4.2%\n   - Recommended: Expand to 2% from current 1%\n\n2. **In-Market: Business Services** (Google)\n   - Conversion rate: 3.8%\n   - Currently untapped\n\n3. **Interest: Tech Enthusiasts 25-44** (TikTok)\n   - High engagement, moderate conversions\n   - Test with product demo content\n\n**Action Items:**\n- Create lookalike audience from Q4 purchasers\n- Test B2B targeting on LinkedIn integration`;
      } else if (userMessage.toLowerCase().includes("compare") || userMessage.toLowerCase().includes("vs")) {
        response = `**Meta vs Google Ads Comparison:**\n\n| Metric | Meta | Google Ads |\n|--------|------|------------|\n| Spend | $12,450 | $8,320 |\n| Impressions | 1.2M | 890K |\n| Clicks | 24.5K | 18.2K |\n| CTR | 2.04% | 2.05% |\n| Conversions | 342 | 287 |\n| CPA | $36.40 | $28.99 |\n| ROAS | 4.8x | 4.2x |\n\n**Analysis:**\n- Google Ads has lower CPA ($28.99 vs $36.40)\n- Meta drives more volume with higher ROAS\n- Both platforms show similar CTR\n\n**Recommendation:** Use Meta for top-of-funnel awareness and Google for high-intent conversions.`;
      } else if (userMessage.toLowerCase().includes("declining") || userMessage.toLowerCase().includes("underperforming")) {
        response = `I've identified these campaigns with declining performance:\n\n**1. Gen Z Awareness (TikTok)** - Paused\n- ROAS dropped from 4.1x to 2.9x over 2 weeks\n- Creative fatigue detected\n- Recommendation: Refresh creatives and narrow targeting\n\n**2. YouTube Pre-roll - Brand** \n- CTR down 18% week-over-week\n- Frequency too high (8.2 avg)\n- Recommendation: Reduce frequency cap and test new video hooks\n\n**3. Meta - Broad Interest Campaign**\n- CPA increased 34% this month\n- Recommendation: Pause and reallocate to retargeting`;
      } else {
        response = `I can help you with that! Here's what I found:\n\n**Overall Campaign Health:**\n- Total active campaigns: 12\n- Platforms connected: 4 (Meta, Google, TikTok, YouTube)\n- This week's spend: $31,860\n- Total conversions: 883\n\n**Key Metrics:**\n- Average ROAS: 4.2x\n- Average CTR: 1.94%\n- Top performer: Retargeting campaigns (6.8x ROAS)\n\nIs there something specific you'd like me to analyze? I can look at:\n- Campaign performance\n- Audience insights\n- Budget optimization\n- Creative analysis\n- Platform comparisons`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    simulateResponse(input);
  };

  const handlePromptClick = (prompt: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: prompt,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    simulateResponse(prompt);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Header */}
      <div className="border-b border-border bg-background p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              AI Assistant
            </h1>
            <p className="text-muted-foreground">
              Ask questions about your campaigns, get insights, and optimize performance.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Badge variant="accent">GPT-4 Powered</Badge>
            <Badge variant="outline">All Platforms Connected</Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.role === "user" && "justify-end"
                )}
              >
                {message.role === "assistant" && (
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <svg className="h-4 w-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-xl px-4 py-3",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                  <p className={cn(
                    "text-xs mt-2",
                    message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}>
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                {message.role === "user" && (
                  <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-secondary-foreground">JK</span>
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg className="h-4 w-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="bg-muted rounded-xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts */}
          {messages.length <= 1 && (
            <div className="px-4 md:px-6 pb-4">
              <p className="text-sm text-muted-foreground mb-3">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handlePromptClick(prompt)}
                    className="text-sm px-3 py-1.5 rounded-full border border-border bg-background hover:bg-muted transition-colors text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-border p-4 md:p-6 bg-background">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your campaigns, performance, or get recommendations..."
                className="flex-1 h-11 rounded-lg border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button type="submit" disabled={!input.trim() || isTyping}>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Button>
            </form>
          </div>
        </div>

        {/* Sidebar - Context Panel */}
        <div className="hidden lg:block w-80 border-l border-border bg-muted/30 p-4 overflow-y-auto">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Connected Data</CardTitle>
              <CardDescription>AI has access to:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Meta Ads (12 campaigns)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Google Ads (8 campaigns)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>TikTok Ads (4 campaigns)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>YouTube Ads (6 campaigns)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-xs text-muted-foreground">
                - Analyze campaign performance
              </p>
              <p className="text-xs text-muted-foreground">
                - Compare platforms & campaigns
              </p>
              <p className="text-xs text-muted-foreground">
                - Budget optimization suggestions
              </p>
              <p className="text-xs text-muted-foreground">
                - Audience recommendations
              </p>
              <p className="text-xs text-muted-foreground">
                - Creative performance insights
              </p>
              <p className="text-xs text-muted-foreground">
                - Generate reports
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Model Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Model</span>
                  <Badge variant="secondary">GPT-4o</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Context</span>
                  <span>Last 30 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
