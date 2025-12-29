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

interface Creative {
  id: string;
  name: string;
  type: "image" | "video" | "carousel";
  format: string;
  status: "active" | "paused" | "review";
  campaigns: number;
  impressions: string;
  ctr: string;
  performance: "high" | "medium" | "low";
  createdAt: string;
}

const creatives: Creative[] = [
  {
    id: "cre-001",
    name: "Summer Sale Banner - Blue",
    type: "image",
    format: "1080x1080",
    status: "active",
    campaigns: 3,
    impressions: "245K",
    ctr: "2.8%",
    performance: "high",
    createdAt: "Dec 1, 2024",
  },
  {
    id: "cre-002",
    name: "Product Demo - 30s",
    type: "video",
    format: "1920x1080",
    status: "active",
    campaigns: 2,
    impressions: "180K",
    ctr: "3.2%",
    performance: "high",
    createdAt: "Dec 5, 2024",
  },
  {
    id: "cre-003",
    name: "Features Carousel",
    type: "carousel",
    format: "1080x1080 (5 slides)",
    status: "active",
    campaigns: 2,
    impressions: "120K",
    ctr: "2.1%",
    performance: "medium",
    createdAt: "Dec 8, 2024",
  },
  {
    id: "cre-004",
    name: "TikTok Vertical - Trend",
    type: "video",
    format: "1080x1920",
    status: "active",
    campaigns: 1,
    impressions: "890K",
    ctr: "4.5%",
    performance: "high",
    createdAt: "Dec 10, 2024",
  },
  {
    id: "cre-005",
    name: "YouTube Pre-roll - 15s",
    type: "video",
    format: "1920x1080",
    status: "active",
    campaigns: 2,
    impressions: "320K",
    ctr: "1.2%",
    performance: "medium",
    createdAt: "Dec 12, 2024",
  },
  {
    id: "cre-006",
    name: "Retargeting Banner - Cart",
    type: "image",
    format: "1200x628",
    status: "active",
    campaigns: 1,
    impressions: "95K",
    ctr: "5.1%",
    performance: "high",
    createdAt: "Dec 15, 2024",
  },
  {
    id: "cre-007",
    name: "New Product Teaser",
    type: "video",
    format: "1080x1080",
    status: "review",
    campaigns: 0,
    impressions: "0",
    ctr: "-",
    performance: "medium",
    createdAt: "Dec 20, 2024",
  },
  {
    id: "cre-008",
    name: "Brand Story - Long",
    type: "video",
    format: "1920x1080",
    status: "paused",
    campaigns: 1,
    impressions: "45K",
    ctr: "0.8%",
    performance: "low",
    createdAt: "Nov 28, 2024",
  },
];

function getTypeIcon(type: string) {
  switch (type) {
    case "image":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "video":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case "carousel":
      return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    default:
      return null;
  }
}

function getPerformanceColor(performance: string) {
  switch (performance) {
    case "high":
      return "text-accent";
    case "medium":
      return "text-yellow-600";
    case "low":
      return "text-destructive";
    default:
      return "text-muted-foreground";
  }
}

export default function CreativesPage() {
  const [view, setView] = React.useState<"grid" | "list">("grid");

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Creatives</h1>
          <p className="text-muted-foreground">Manage your ad creatives and variations.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-lg border border-border">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-2 ${view === "grid" ? "bg-muted" : ""}`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-2 ${view === "list" ? "bg-muted" : ""}`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
          <Button>
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload Creative
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{creatives.length}</div>
            <p className="text-sm text-muted-foreground">Total Creatives</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{creatives.filter(c => c.status === "active").length}</div>
            <p className="text-sm text-muted-foreground">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-accent">{creatives.filter(c => c.performance === "high").length}</div>
            <p className="text-sm text-muted-foreground">High Performers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">2.9%</div>
            <p className="text-sm text-muted-foreground">Avg CTR</p>
          </CardContent>
        </Card>
      </div>

      {/* Creatives Grid */}
      {view === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {creatives.map((creative) => (
            <Card key={creative.id} className="overflow-hidden hover:shadow-md transition-shadow">
              {/* Preview Placeholder */}
              <div className="aspect-square bg-muted flex items-center justify-center relative">
                <div className="text-muted-foreground">
                  {getTypeIcon(creative.type)}
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant={creative.status === "active" ? "accent" : creative.status === "review" ? "secondary" : "muted"}>
                    {creative.status}
                  </Badge>
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {creative.type}
                  </Badge>
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-medium truncate">{creative.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{creative.format}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <div className="text-sm">
                    <span className="text-muted-foreground">CTR: </span>
                    <span className={getPerformanceColor(creative.performance)}>{creative.ctr}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {creative.impressions} imp.
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Creatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Creative</th>
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Type</th>
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                    <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Campaigns</th>
                    <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Impressions</th>
                    <th className="pb-3 text-right text-sm font-medium text-muted-foreground">CTR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {creatives.map((creative) => (
                    <tr key={creative.id} className="hover:bg-muted/50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded bg-muted flex items-center justify-center text-muted-foreground">
                            {getTypeIcon(creative.type)}
                          </div>
                          <div>
                            <p className="font-medium">{creative.name}</p>
                            <p className="text-xs text-muted-foreground">{creative.format}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 capitalize">{creative.type}</td>
                      <td className="py-4">
                        <Badge variant={creative.status === "active" ? "accent" : "muted"}>
                          {creative.status}
                        </Badge>
                      </td>
                      <td className="py-4 text-right">{creative.campaigns}</td>
                      <td className="py-4 text-right">{creative.impressions}</td>
                      <td className={`py-4 text-right font-medium ${getPerformanceColor(creative.performance)}`}>
                        {creative.ctr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
