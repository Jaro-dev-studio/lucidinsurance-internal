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
import Link from "next/link";

/**
 * Platform performance data
 */
const platformStats = [
  { 
    platform: "Meta", 
    spend: "$12,450", 
    impressions: "1.2M", 
    clicks: "24.5K", 
    ctr: "2.04%", 
    conversions: 342,
    status: "active",
    color: "bg-blue-500"
  },
  { 
    platform: "Google Ads", 
    spend: "$8,320", 
    impressions: "890K", 
    clicks: "18.2K", 
    ctr: "2.05%", 
    conversions: 287,
    status: "active",
    color: "bg-red-500"
  },
  { 
    platform: "TikTok", 
    spend: "$4,890", 
    impressions: "2.1M", 
    clicks: "45.3K", 
    ctr: "2.16%", 
    conversions: 156,
    status: "active",
    color: "bg-gray-900"
  },
  { 
    platform: "YouTube", 
    spend: "$6,200", 
    impressions: "560K", 
    clicks: "8.4K", 
    ctr: "1.50%", 
    conversions: 98,
    status: "active",
    color: "bg-red-600"
  },
];

/**
 * Top performing campaigns
 */
const topCampaigns = [
  {
    name: "Summer Sale 2024",
    platform: "Meta",
    status: "active",
    spend: "$4,250",
    roas: "4.2x",
    conversions: 89,
  },
  {
    name: "Brand Awareness Q1",
    platform: "YouTube",
    status: "active",
    spend: "$3,100",
    roas: "3.8x",
    conversions: 45,
  },
  {
    name: "Product Launch - Pro",
    platform: "Google Ads",
    status: "active",
    spend: "$2,890",
    roas: "5.1x",
    conversions: 72,
  },
  {
    name: "Retargeting - Cart",
    platform: "Meta",
    status: "active",
    spend: "$1,450",
    roas: "6.8x",
    conversions: 124,
  },
  {
    name: "Gen Z Awareness",
    platform: "TikTok",
    status: "paused",
    spend: "$2,100",
    roas: "2.9x",
    conversions: 38,
  },
];

/**
 * AI insights
 */
const aiInsights = [
  {
    type: "opportunity",
    title: "Increase TikTok budget",
    description: "TikTok campaigns showing 23% higher CTR than average. Consider reallocating budget.",
    impact: "High",
  },
  {
    type: "warning",
    title: "Meta CPM rising",
    description: "Cost per mille increased 15% this week. Review targeting to optimize spend.",
    impact: "Medium",
  },
  {
    type: "success",
    title: "Retargeting performing well",
    description: "Cart abandonment retargeting showing 6.8x ROAS. Top performer this month.",
    impact: "High",
  },
];

/**
 * Overall stats
 */
const overallStats = [
  { label: "Total Spend", value: "$31,860", change: "+12.4%", isPositive: false },
  { label: "Total Conversions", value: "883", change: "+28.3%", isPositive: true },
  { label: "Avg. ROAS", value: "4.2x", change: "+0.8x", isPositive: true },
  { label: "Avg. CTR", value: "1.94%", change: "+0.23%", isPositive: true },
];

/**
 * Dashboard home page for LucidAds.
 */
export default function DashboardPage() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Advertising Dashboard
          </h1>
          <p className="text-muted-foreground">
            Track your campaigns across all platforms in real-time.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link href="/campaigns">View Campaigns</Link>
          </Button>
          <Button asChild>
            <Link href="/assistant">
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Ask AI
            </Link>
          </Button>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overallStats.map((stat, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span
                  className={
                    stat.isPositive ? "text-accent" : "text-destructive"
                  }
                >
                  {stat.change}
                </span>{" "}
                vs last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Platform Performance */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Platform Performance</CardTitle>
              <CardDescription>Real-time metrics across all connected platforms</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/integrations">Manage Platforms</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Platform</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Spend</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground hidden sm:table-cell">Impressions</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground hidden md:table-cell">Clicks</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">CTR</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Conversions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {platformStats.map((platform) => (
                  <tr key={platform.platform} className="hover:bg-muted/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${platform.color}`} />
                        <span className="font-medium">{platform.platform}</span>
                        <Badge variant="accent" className="text-xs">{platform.status}</Badge>
                      </div>
                    </td>
                    <td className="py-4 text-right font-medium">{platform.spend}</td>
                    <td className="py-4 text-right text-muted-foreground hidden sm:table-cell">{platform.impressions}</td>
                    <td className="py-4 text-right text-muted-foreground hidden md:table-cell">{platform.clicks}</td>
                    <td className="py-4 text-right">{platform.ctr}</td>
                    <td className="py-4 text-right font-semibold text-accent">{platform.conversions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-7">
        {/* Top Campaigns */}
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Top Campaigns</CardTitle>
              <CardDescription>
                Best performing campaigns by ROAS
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/campaigns">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCampaigns.map((campaign, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-medium text-sm truncate">{campaign.name}</p>
                      <Badge
                        variant={campaign.status === "active" ? "accent" : "muted"}
                        className="text-xs"
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {campaign.platform} - Spend: {campaign.spend}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold text-accent">{campaign.roas}</p>
                    <p className="text-xs text-muted-foreground">{campaign.conversions} conv.</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <CardTitle>AI Insights</CardTitle>
            </div>
            <CardDescription>
              Recommendations powered by AI analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-border">
                  <div className={`mt-0.5 h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                    insight.type === "opportunity" ? "bg-primary/10" :
                    insight.type === "warning" ? "bg-yellow-500/10" : "bg-accent/10"
                  }`}>
                    {insight.type === "opportunity" && (
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                    {insight.type === "warning" && (
                      <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                    {insight.type === "success" && (
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">{insight.title}</p>
                      <Badge variant={insight.impact === "High" ? "default" : "muted"} className="text-xs">
                        {insight.impact}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/assistant">Get More Insights</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href="/campaigns">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Campaign
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/creatives">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upload Creative
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/audiences">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Create Audience
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/reports">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Generate Report
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
