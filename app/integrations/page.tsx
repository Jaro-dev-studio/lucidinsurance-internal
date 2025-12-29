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

interface Integration {
  id: string;
  name: string;
  description: string;
  category: "advertising" | "analytics" | "ai" | "data";
  status: "connected" | "disconnected" | "error";
  lastSync?: string;
  icon: string;
  campaigns?: number;
  spend?: string;
}

const integrations: Integration[] = [
  {
    id: "meta",
    name: "Meta Ads",
    description: "Facebook & Instagram advertising platform",
    category: "advertising",
    status: "connected",
    lastSync: "2 min ago",
    icon: "meta",
    campaigns: 12,
    spend: "$12,450",
  },
  {
    id: "google",
    name: "Google Ads",
    description: "Search, display, and YouTube advertising",
    category: "advertising",
    status: "connected",
    lastSync: "5 min ago",
    icon: "google",
    campaigns: 8,
    spend: "$8,320",
  },
  {
    id: "tiktok",
    name: "TikTok Ads",
    description: "Short-form video advertising platform",
    category: "advertising",
    status: "connected",
    lastSync: "10 min ago",
    icon: "tiktok",
    campaigns: 4,
    spend: "$4,890",
  },
  {
    id: "youtube",
    name: "YouTube Ads",
    description: "Video advertising through Google Ads",
    category: "advertising",
    status: "connected",
    lastSync: "5 min ago",
    icon: "youtube",
    campaigns: 6,
    spend: "$6,200",
  },
  {
    id: "linkedin",
    name: "LinkedIn Ads",
    description: "B2B professional advertising platform",
    category: "advertising",
    status: "disconnected",
    icon: "linkedin",
  },
  {
    id: "twitter",
    name: "X (Twitter) Ads",
    description: "Social media advertising platform",
    category: "advertising",
    status: "disconnected",
    icon: "twitter",
  },
  {
    id: "ga4",
    name: "Google Analytics 4",
    description: "Website and app analytics",
    category: "analytics",
    status: "connected",
    lastSync: "Real-time",
    icon: "analytics",
  },
  {
    id: "gpt4",
    name: "GPT-4o",
    description: "OpenAI language model for AI insights",
    category: "ai",
    status: "connected",
    lastSync: "Active",
    icon: "openai",
  },
  {
    id: "claude",
    name: "Claude 3",
    description: "Anthropic AI for analysis",
    category: "ai",
    status: "disconnected",
    icon: "anthropic",
  },
  {
    id: "gemini",
    name: "Gemini Pro",
    description: "Google AI for advanced analytics",
    category: "ai",
    status: "disconnected",
    icon: "google",
  },
];

function getStatusBadge(status: string) {
  switch (status) {
    case "connected":
      return <Badge variant="accent">Connected</Badge>;
    case "disconnected":
      return <Badge variant="outline">Not Connected</Badge>;
    case "error":
      return <Badge variant="destructive">Error</Badge>;
    default:
      return null;
  }
}

function getIcon(icon: string) {
  switch (icon) {
    case "meta":
      return (
        <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">
          f
        </div>
      );
    case "google":
    case "analytics":
      return (
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 flex items-center justify-center text-white font-bold">
          G
        </div>
      );
    case "tiktok":
      return (
        <div className="h-10 w-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">
          T
        </div>
      );
    case "youtube":
      return (
        <div className="h-10 w-10 rounded-lg bg-red-600 flex items-center justify-center text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </div>
      );
    case "linkedin":
      return (
        <div className="h-10 w-10 rounded-lg bg-blue-700 flex items-center justify-center text-white font-bold">
          in
        </div>
      );
    case "twitter":
      return (
        <div className="h-10 w-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">
          X
        </div>
      );
    case "openai":
      return (
        <div className="h-10 w-10 rounded-lg bg-black flex items-center justify-center text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
          </svg>
        </div>
      );
    case "anthropic":
      return (
        <div className="h-10 w-10 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">
          C
        </div>
      );
    default:
      return (
        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
          <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
      );
  }
}

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = ["all", "advertising", "analytics", "ai"];
  const filteredIntegrations = integrations.filter(
    (i) => selectedCategory === "all" || i.category === selectedCategory
  );

  const connectedCount = integrations.filter((i) => i.status === "connected").length;

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Integrations</h1>
          <p className="text-muted-foreground">Connect your advertising platforms and AI models.</p>
        </div>
        <Badge variant="accent" className="w-fit">{connectedCount} of {integrations.length} connected</Badge>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap capitalize ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {category === "all" ? "All Integrations" : category === "ai" ? "AI Models" : category}
          </button>
        ))}
      </div>

      {/* Connected Platforms Summary */}
      {selectedCategory === "all" || selectedCategory === "advertising" ? (
        <Card>
          <CardHeader>
            <CardTitle>Active Ad Platforms</CardTitle>
            <CardDescription>Real-time sync status and spend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {integrations
                .filter((i) => i.category === "advertising" && i.status === "connected")
                .map((integration) => (
                  <div
                    key={integration.id}
                    className="p-4 rounded-lg border border-border bg-muted/30"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {getIcon(integration.icon)}
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-xs text-muted-foreground">Synced {integration.lastSync}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Campaigns</p>
                        <p className="font-semibold">{integration.campaigns}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Spend</p>
                        <p className="font-semibold">{integration.spend}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      ) : null}

      {/* All Integrations */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredIntegrations.map((integration) => (
          <Card key={integration.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                {getIcon(integration.icon)}
                {getStatusBadge(integration.status)}
              </div>
              <h3 className="font-semibold text-lg">{integration.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{integration.description}</p>
              {integration.lastSync && (
                <p className="text-xs text-muted-foreground mt-2">
                  Last sync: {integration.lastSync}
                </p>
              )}
              <div className="mt-4 pt-4 border-t border-border">
                {integration.status === "connected" ? (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Settings
                    </Button>
                    <Button variant="ghost" size="sm">
                      Disconnect
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full" size="sm">
                    Connect
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
