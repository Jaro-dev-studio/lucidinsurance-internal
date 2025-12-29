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
import { Input } from "@/components/ui/input";

interface Campaign {
  id: string;
  name: string;
  platform: "Meta" | "Google" | "TikTok" | "YouTube";
  status: "active" | "paused" | "draft" | "ended";
  objective: string;
  budget: string;
  spent: string;
  impressions: string;
  clicks: string;
  conversions: number;
  ctr: string;
  roas: string;
  startDate: string;
  endDate: string;
}

const campaigns: Campaign[] = [
  {
    id: "camp-001",
    name: "Summer Sale 2024",
    platform: "Meta",
    status: "active",
    objective: "Conversions",
    budget: "$10,000",
    spent: "$4,250",
    impressions: "520K",
    clicks: "12.4K",
    conversions: 89,
    ctr: "2.38%",
    roas: "4.2x",
    startDate: "Dec 1, 2024",
    endDate: "Jan 31, 2025",
  },
  {
    id: "camp-002",
    name: "Brand Awareness Q1",
    platform: "YouTube",
    status: "active",
    objective: "Brand Awareness",
    budget: "$8,000",
    spent: "$3,100",
    impressions: "890K",
    clicks: "8.9K",
    conversions: 45,
    ctr: "1.00%",
    roas: "3.8x",
    startDate: "Dec 15, 2024",
    endDate: "Mar 15, 2025",
  },
  {
    id: "camp-003",
    name: "Product Launch - Pro",
    platform: "Google",
    status: "active",
    objective: "Conversions",
    budget: "$5,000",
    spent: "$2,890",
    impressions: "340K",
    clicks: "7.2K",
    conversions: 72,
    ctr: "2.12%",
    roas: "5.1x",
    startDate: "Dec 10, 2024",
    endDate: "Feb 10, 2025",
  },
  {
    id: "camp-004",
    name: "Retargeting - Cart",
    platform: "Meta",
    status: "active",
    objective: "Conversions",
    budget: "$3,000",
    spent: "$1,450",
    impressions: "180K",
    clicks: "5.8K",
    conversions: 124,
    ctr: "3.22%",
    roas: "6.8x",
    startDate: "Nov 1, 2024",
    endDate: "Ongoing",
  },
  {
    id: "camp-005",
    name: "Gen Z Awareness",
    platform: "TikTok",
    status: "paused",
    objective: "Reach",
    budget: "$5,000",
    spent: "$2,100",
    impressions: "1.2M",
    clicks: "28.5K",
    conversions: 38,
    ctr: "2.38%",
    roas: "2.9x",
    startDate: "Nov 15, 2024",
    endDate: "Jan 15, 2025",
  },
  {
    id: "camp-006",
    name: "Holiday Special",
    platform: "Google",
    status: "ended",
    objective: "Sales",
    budget: "$15,000",
    spent: "$15,000",
    impressions: "1.8M",
    clicks: "42K",
    conversions: 312,
    ctr: "2.33%",
    roas: "5.4x",
    startDate: "Nov 20, 2024",
    endDate: "Dec 25, 2024",
  },
  {
    id: "camp-007",
    name: "Spring Collection Preview",
    platform: "Meta",
    status: "draft",
    objective: "Traffic",
    budget: "$8,000",
    spent: "$0",
    impressions: "0",
    clicks: "0",
    conversions: 0,
    ctr: "0%",
    roas: "-",
    startDate: "Feb 1, 2025",
    endDate: "Mar 31, 2025",
  },
  {
    id: "camp-008",
    name: "YouTube Pre-roll - Brand",
    platform: "YouTube",
    status: "active",
    objective: "Video Views",
    budget: "$6,000",
    spent: "$3,100",
    impressions: "420K",
    clicks: "4.2K",
    conversions: 28,
    ctr: "1.00%",
    roas: "2.1x",
    startDate: "Dec 1, 2024",
    endDate: "Feb 28, 2025",
  },
];

const platformColors: Record<string, string> = {
  Meta: "bg-blue-500",
  Google: "bg-red-500",
  TikTok: "bg-gray-900",
  YouTube: "bg-red-600",
};

function getStatusVariant(status: string): "accent" | "secondary" | "muted" | "outline" {
  switch (status) {
    case "active":
      return "accent";
    case "paused":
      return "secondary";
    case "draft":
      return "outline";
    default:
      return "muted";
  }
}

export default function CampaignsPage() {
  const [search, setSearch] = React.useState("");
  const [filterPlatform, setFilterPlatform] = React.useState<string>("all");
  const [filterStatus, setFilterStatus] = React.useState<string>("all");

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.name.toLowerCase().includes(search.toLowerCase());
    const matchesPlatform = filterPlatform === "all" || campaign.platform === filterPlatform;
    const matchesStatus = filterStatus === "all" || campaign.status === filterStatus;
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Campaigns</h1>
          <p className="text-muted-foreground">Manage all your advertising campaigns across platforms.</p>
        </div>
        <Button>
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Campaign
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{campaigns.filter(c => c.status === "active").length}</div>
            <p className="text-sm text-muted-foreground">Active Campaigns</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">$31,890</div>
            <p className="text-sm text-muted-foreground">Total Spent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">708</div>
            <p className="text-sm text-muted-foreground">Total Conversions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-accent">4.3x</div>
            <p className="text-sm text-muted-foreground">Average ROAS</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-1">
              <Input
                placeholder="Search campaigns..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterPlatform}
                onChange={(e) => setFilterPlatform(e.target.value)}
                className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
              >
                <option value="all">All Platforms</option>
                <option value="Meta">Meta</option>
                <option value="Google">Google</option>
                <option value="TikTok">TikTok</option>
                <option value="YouTube">YouTube</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="draft">Draft</option>
                <option value="ended">Ended</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
          <CardDescription>
            {filteredCampaigns.length} campaigns found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Campaign</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Platform</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground hidden md:table-cell">Budget</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Spent</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground hidden lg:table-cell">Conversions</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">ROAS</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-muted/50 transition-colors">
                    <td className="py-4">
                      <div>
                        <p className="font-medium">{campaign.name}</p>
                        <p className="text-xs text-muted-foreground">{campaign.objective}</p>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className={`h-2.5 w-2.5 rounded-full ${platformColors[campaign.platform]}`} />
                        <span className="text-sm">{campaign.platform}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge variant={getStatusVariant(campaign.status)} className="capitalize">
                        {campaign.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-right hidden md:table-cell">{campaign.budget}</td>
                    <td className="py-4 text-right font-medium">{campaign.spent}</td>
                    <td className="py-4 text-right hidden lg:table-cell">{campaign.conversions}</td>
                    <td className="py-4 text-right font-semibold text-accent">{campaign.roas}</td>
                    <td className="py-4 text-right">
                      <Button variant="ghost" size="sm">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
