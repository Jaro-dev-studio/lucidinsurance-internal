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

/**
 * Performance data over time
 */
const weeklyData = [
  { day: "Mon", spend: 4200, conversions: 89, impressions: 180000 },
  { day: "Tue", spend: 4800, conversions: 102, impressions: 195000 },
  { day: "Wed", spend: 5100, conversions: 118, impressions: 210000 },
  { day: "Thu", spend: 4600, conversions: 95, impressions: 188000 },
  { day: "Fri", spend: 5500, conversions: 134, impressions: 245000 },
  { day: "Sat", spend: 3800, conversions: 78, impressions: 156000 },
  { day: "Sun", spend: 3860, conversions: 82, impressions: 162000 },
];

const platformBreakdown = [
  { platform: "Meta", spend: 12450, conversions: 342, percentage: 39 },
  { platform: "Google Ads", spend: 8320, conversions: 287, percentage: 26 },
  { platform: "YouTube", spend: 6200, conversions: 98, percentage: 20 },
  { platform: "TikTok", spend: 4890, conversions: 156, percentage: 15 },
];

const topMetrics = [
  { label: "Total Impressions", value: "5.4M", change: "+18.2%", isPositive: true },
  { label: "Total Clicks", value: "96.4K", change: "+22.1%", isPositive: true },
  { label: "Avg. CPC", value: "$0.33", change: "-8.2%", isPositive: true },
  { label: "Avg. CPM", value: "$5.89", change: "+3.1%", isPositive: false },
  { label: "Total Conversions", value: "883", change: "+28.3%", isPositive: true },
  { label: "Conversion Rate", value: "0.92%", change: "+0.12%", isPositive: true },
];

const conversionFunnel = [
  { stage: "Impressions", value: 5400000, percentage: 100 },
  { stage: "Clicks", value: 96400, percentage: 1.79 },
  { stage: "Landing Page Views", value: 82400, percentage: 1.53 },
  { stage: "Add to Cart", value: 4850, percentage: 0.09 },
  { stage: "Checkout Started", value: 1420, percentage: 0.03 },
  { stage: "Purchase", value: 883, percentage: 0.02 },
];

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = React.useState("7d");

  const maxSpend = Math.max(...weeklyData.map((d) => d.spend));

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track performance and conversions across all platforms.</p>
        </div>
        <div className="flex gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="14d">Last 14 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <Button variant="outline">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {topMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className={`text-xs mt-1 ${metric.isPositive ? "text-accent" : "text-destructive"}`}>
                {metric.change} vs last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Spend Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Ad Spend</CardTitle>
            <CardDescription>Spend distribution over the selected period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center gap-3">
                  <span className="w-10 text-sm text-muted-foreground">{day.day}</span>
                  <div className="flex-1 h-8 bg-muted rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-lg transition-all"
                      style={{ width: `${(day.spend / maxSpend) * 100}%` }}
                    />
                  </div>
                  <span className="w-16 text-sm font-medium text-right">${(day.spend / 1000).toFixed(1)}K</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border flex justify-between text-sm">
              <span className="text-muted-foreground">Total Spend</span>
              <span className="font-semibold">${(weeklyData.reduce((a, b) => a + b.spend, 0) / 1000).toFixed(1)}K</span>
            </div>
          </CardContent>
        </Card>

        {/* Platform Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Breakdown</CardTitle>
            <CardDescription>Spend and conversions by platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {platformBreakdown.map((platform) => (
                <div key={platform.platform} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{platform.platform}</span>
                    <div className="text-right">
                      <span className="font-semibold">${(platform.spend / 1000).toFixed(1)}K</span>
                      <span className="text-muted-foreground text-sm ml-2">({platform.percentage}%)</span>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${platform.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{platform.conversions} conversions</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Conversion Funnel</CardTitle>
          <CardDescription>User journey from impression to purchase</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionFunnel.map((stage, index) => {
              const widthPercentage = index === 0 ? 100 : (stage.value / conversionFunnel[0].value) * 100;
              return (
                <div key={stage.stage} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{stage.stage}</span>
                    <div>
                      <span className="font-semibold">{stage.value.toLocaleString()}</span>
                      <span className="text-muted-foreground ml-2">({stage.percentage}%)</span>
                    </div>
                  </div>
                  <div className="h-8 bg-muted rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-lg transition-all"
                      style={{ width: `${Math.max(widthPercentage, 2)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
            <div>
              <p className="text-sm text-muted-foreground">Click-through Rate</p>
              <p className="text-lg font-semibold">1.79%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Landing Rate</p>
              <p className="text-lg font-semibold">85.5%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cart Rate</p>
              <p className="text-lg font-semibold">5.9%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Purchase Rate</p>
              <p className="text-lg font-semibold text-accent">62.2%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Conversions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Daily Conversions</CardTitle>
              <CardDescription>Conversion trends over the past week</CardDescription>
            </div>
            <Badge variant="accent">+28.3% vs last week</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between h-48 gap-2">
            {weeklyData.map((day) => {
              const maxConversions = Math.max(...weeklyData.map((d) => d.conversions));
              const heightPercentage = (day.conversions / maxConversions) * 100;
              return (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-medium">{day.conversions}</span>
                  <div className="w-full bg-muted rounded-t-lg overflow-hidden" style={{ height: "160px" }}>
                    <div
                      className="w-full bg-accent rounded-t-lg transition-all mt-auto"
                      style={{ height: `${heightPercentage}%`, marginTop: `${100 - heightPercentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{day.day}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
