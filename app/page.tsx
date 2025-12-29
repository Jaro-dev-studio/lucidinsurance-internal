import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";

/**
 * Insurance dashboard statistics
 */
const dashboardStats = [
  { label: "Active Claims", value: "342", change: "+12", isPositive: true, icon: "claims" },
  { label: "Claims Processed Today", value: "47", change: "+8", isPositive: true, icon: "processed" },
  { label: "Average Resolution Time", value: "3.2 days", change: "-0.5", isPositive: true, icon: "time" },
  { label: "Customer Satisfaction", value: "94.2%", change: "+2.1%", isPositive: true, icon: "satisfaction" },
];

/**
 * Recent claims activity
 */
const recentClaims = [
  {
    id: "CLM-2024-0892",
    client: "Michael Thompson",
    type: "Auto Insurance",
    status: "pending",
    amount: "$4,250.00",
    submitted: "2 hours ago",
    avatar: "MT",
  },
  {
    id: "CLM-2024-0891",
    client: "Jennifer Williams",
    type: "Home Insurance",
    status: "in_review",
    amount: "$12,800.00",
    submitted: "5 hours ago",
    avatar: "JW",
  },
  {
    id: "CLM-2024-0890",
    client: "Robert Garcia",
    type: "Health Insurance",
    status: "approved",
    amount: "$1,920.00",
    submitted: "Yesterday",
    avatar: "RG",
  },
  {
    id: "CLM-2024-0889",
    client: "Emily Chen",
    type: "Life Insurance",
    status: "processing",
    amount: "$50,000.00",
    submitted: "Yesterday",
    avatar: "EC",
  },
  {
    id: "CLM-2024-0888",
    client: "David Martinez",
    type: "Auto Insurance",
    status: "completed",
    amount: "$2,150.00",
    submitted: "2 days ago",
    avatar: "DM",
  },
];

/**
 * AI activity log
 */
const aiActivity = [
  {
    action: "Processed claim automatically",
    claim: "CLM-2024-0885",
    time: "10 min ago",
  },
  {
    action: "Generated settlement recommendation",
    claim: "CLM-2024-0882",
    time: "25 min ago",
  },
  {
    action: "Completed customer inquiry",
    claim: "CLM-2024-0879",
    time: "1 hour ago",
  },
  {
    action: "Flagged claim for manual review",
    claim: "CLM-2024-0876",
    time: "2 hours ago",
  },
];

/**
 * Status badge styling
 */
function getStatusVariant(status: string): "accent" | "secondary" | "default" | "muted" | "outline" {
  switch (status) {
    case "approved":
    case "completed":
      return "accent";
    case "in_review":
    case "processing":
      return "default";
    case "pending":
      return "secondary";
    default:
      return "muted";
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case "in_review":
      return "In Review";
    case "pending":
      return "Pending";
    case "approved":
      return "Approved";
    case "processing":
      return "Processing";
    case "completed":
      return "Completed";
    default:
      return status;
  }
}

/**
 * Dashboard home page for Lucidinsurance.
 */
export default function DashboardPage() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Claims Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, Sarah. Here&apos;s your claims overview for today.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link href="/claims">View All Claims</Link>
          </Button>
          <Button asChild>
            <Link href="/assistant">
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              AI Assistant
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium flex items-center gap-2">
                {stat.icon === "claims" && (
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {stat.icon === "processed" && (
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {stat.icon === "time" && (
                  <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {stat.icon === "satisfaction" && (
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
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
                from yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-7">
        {/* Recent Claims */}
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Claims</CardTitle>
              <CardDescription>
                Latest claims requiring attention
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/claims">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentClaims.map((claim) => (
                <div
                  key={claim.id}
                  className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar fallback={claim.avatar} size="sm" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-medium text-sm">{claim.client}</p>
                        <Badge
                          variant={getStatusVariant(claim.status)}
                          className="text-xs"
                        >
                          {getStatusLabel(claim.status)}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {claim.id} - {claim.type}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold text-sm">{claim.amount}</p>
                    <p className="text-xs text-muted-foreground">{claim.submitted}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Activity */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <CardTitle>AI Assistant Activity</CardTitle>
            </div>
            <CardDescription>
              Automated actions performed by AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiActivity.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.claim} - {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/assistant">Open AI Assistant</Link>
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
              <Link href="/claims">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                New Claim
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/clients">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Add Client
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/reports">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Generate Report
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/workflows">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
                  />
                </svg>
                Manage Workflows
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
