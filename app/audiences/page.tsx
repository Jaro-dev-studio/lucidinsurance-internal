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

interface Audience {
  id: string;
  name: string;
  type: "custom" | "lookalike" | "interest" | "retargeting";
  platform: string[];
  size: string;
  campaigns: number;
  performance: "high" | "medium" | "low";
  description: string;
  createdAt: string;
}

const audiences: Audience[] = [
  {
    id: "aud-001",
    name: "Lookalike - Top Purchasers 1%",
    type: "lookalike",
    platform: ["Meta"],
    size: "2.1M",
    campaigns: 4,
    performance: "high",
    description: "Based on top 10% of customers by LTV",
    createdAt: "Nov 15, 2024",
  },
  {
    id: "aud-002",
    name: "Cart Abandoners - 7 Days",
    type: "retargeting",
    platform: ["Meta", "Google"],
    size: "45K",
    campaigns: 2,
    performance: "high",
    description: "Users who added to cart but didn't purchase",
    createdAt: "Dec 1, 2024",
  },
  {
    id: "aud-003",
    name: "Tech Enthusiasts 25-44",
    type: "interest",
    platform: ["TikTok", "YouTube"],
    size: "8.5M",
    campaigns: 3,
    performance: "medium",
    description: "Interest-based targeting for tech products",
    createdAt: "Nov 20, 2024",
  },
  {
    id: "aud-004",
    name: "Website Visitors - 30 Days",
    type: "retargeting",
    platform: ["Meta", "Google"],
    size: "125K",
    campaigns: 3,
    performance: "medium",
    description: "All website visitors in the last 30 days",
    createdAt: "Oct 1, 2024",
  },
  {
    id: "aud-005",
    name: "In-Market: Business Services",
    type: "interest",
    platform: ["Google"],
    size: "4.2M",
    campaigns: 1,
    performance: "high",
    description: "Users actively researching business services",
    createdAt: "Dec 10, 2024",
  },
  {
    id: "aud-006",
    name: "Email Subscribers",
    type: "custom",
    platform: ["Meta", "Google"],
    size: "89K",
    campaigns: 2,
    performance: "medium",
    description: "Uploaded email list from newsletter",
    createdAt: "Nov 1, 2024",
  },
  {
    id: "aud-007",
    name: "Gen Z Trendsetters",
    type: "interest",
    platform: ["TikTok"],
    size: "12M",
    campaigns: 1,
    performance: "low",
    description: "18-24 year olds interested in trends",
    createdAt: "Nov 25, 2024",
  },
  {
    id: "aud-008",
    name: "Lookalike - Engaged Users 2%",
    type: "lookalike",
    platform: ["Meta"],
    size: "4.3M",
    campaigns: 2,
    performance: "medium",
    description: "Based on highly engaged website visitors",
    createdAt: "Dec 5, 2024",
  },
];

const audienceTypeIcons: Record<string, React.ReactNode> = {
  custom: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  lookalike: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  interest: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  retargeting: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

function getPerformanceBadge(performance: string) {
  switch (performance) {
    case "high":
      return <Badge variant="accent">High</Badge>;
    case "medium":
      return <Badge variant="secondary">Medium</Badge>;
    case "low":
      return <Badge variant="muted">Low</Badge>;
    default:
      return null;
  }
}

export default function AudiencesPage() {
  const [selectedType, setSelectedType] = React.useState<string>("all");

  const filteredAudiences = audiences.filter(
    (audience) => selectedType === "all" || audience.type === selectedType
  );

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Audiences</h1>
          <p className="text-muted-foreground">Manage your target audiences and personas.</p>
        </div>
        <Button>
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Audience
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{audiences.length}</div>
            <p className="text-sm text-muted-foreground">Total Audiences</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">31.1M</div>
            <p className="text-sm text-muted-foreground">Total Reach</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-accent">{audiences.filter(a => a.performance === "high").length}</div>
            <p className="text-sm text-muted-foreground">High Performers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">18</div>
            <p className="text-sm text-muted-foreground">Active Campaigns</p>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {["all", "custom", "lookalike", "interest", "retargeting"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              selectedType === type
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {type === "all" ? "All Audiences" : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Audiences List */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredAudiences.map((audience) => (
          <Card key={audience.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {audienceTypeIcons[audience.type]}
                  </div>
                  <div>
                    <CardTitle className="text-base">{audience.name}</CardTitle>
                    <CardDescription className="capitalize">{audience.type}</CardDescription>
                  </div>
                </div>
                {getPerformanceBadge(audience.performance)}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{audience.description}</p>
              
              <div className="grid grid-cols-3 gap-4 py-3 border-t border-b border-border">
                <div>
                  <p className="text-lg font-semibold">{audience.size}</p>
                  <p className="text-xs text-muted-foreground">Audience Size</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{audience.campaigns}</p>
                  <p className="text-xs text-muted-foreground">Campaigns</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{audience.platform.length}</p>
                  <p className="text-xs text-muted-foreground">Platforms</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-1">
                  {audience.platform.map((p) => (
                    <Badge key={p} variant="outline" className="text-xs">
                      {p}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
