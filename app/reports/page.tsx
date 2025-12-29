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

interface Report {
  id: string;
  name: string;
  type: "performance" | "audience" | "creative" | "conversion" | "custom";
  schedule: "daily" | "weekly" | "monthly" | "once";
  lastGenerated: string;
  status: "ready" | "generating" | "scheduled";
  recipients: number;
}

const reports: Report[] = [
  {
    id: "rpt-001",
    name: "Weekly Performance Summary",
    type: "performance",
    schedule: "weekly",
    lastGenerated: "Dec 22, 2024",
    status: "ready",
    recipients: 3,
  },
  {
    id: "rpt-002",
    name: "Monthly Executive Report",
    type: "performance",
    schedule: "monthly",
    lastGenerated: "Dec 1, 2024",
    status: "ready",
    recipients: 5,
  },
  {
    id: "rpt-003",
    name: "Campaign ROAS Analysis",
    type: "conversion",
    schedule: "weekly",
    lastGenerated: "Dec 23, 2024",
    status: "ready",
    recipients: 2,
  },
  {
    id: "rpt-004",
    name: "Audience Insights Report",
    type: "audience",
    schedule: "monthly",
    lastGenerated: "Dec 15, 2024",
    status: "ready",
    recipients: 4,
  },
  {
    id: "rpt-005",
    name: "Creative Performance",
    type: "creative",
    schedule: "weekly",
    lastGenerated: "Generating...",
    status: "generating",
    recipients: 2,
  },
  {
    id: "rpt-006",
    name: "Platform Comparison",
    type: "custom",
    schedule: "once",
    lastGenerated: "Dec 20, 2024",
    status: "ready",
    recipients: 1,
  },
];

const reportTemplates = [
  {
    name: "Performance Overview",
    description: "Key metrics across all platforms including spend, conversions, and ROAS",
    icon: "chart",
  },
  {
    name: "Audience Analysis",
    description: "Detailed breakdown of audience performance and demographics",
    icon: "users",
  },
  {
    name: "Creative Report",
    description: "Performance metrics for all ad creatives and variations",
    icon: "image",
  },
  {
    name: "Conversion Funnel",
    description: "End-to-end conversion analysis from impression to purchase",
    icon: "funnel",
  },
];

function getTypeColor(type: string) {
  switch (type) {
    case "performance":
      return "bg-blue-500";
    case "audience":
      return "bg-purple-500";
    case "creative":
      return "bg-green-500";
    case "conversion":
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
}

export default function ReportsPage() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Reports</h1>
          <p className="text-muted-foreground">Generate and schedule advertising reports.</p>
        </div>
        <Button>
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Report
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{reports.length}</div>
            <p className="text-sm text-muted-foreground">Total Reports</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{reports.filter(r => r.schedule !== "once").length}</div>
            <p className="text-sm text-muted-foreground">Scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{reports.filter(r => r.status === "ready").length}</div>
            <p className="text-sm text-muted-foreground">Ready to View</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">17</div>
            <p className="text-sm text-muted-foreground">Recipients</p>
          </CardContent>
        </Card>
      </div>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Create</CardTitle>
          <CardDescription>Generate a report from these templates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reportTemplates.map((template, index) => (
              <button
                key={index}
                className="p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors text-left"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {template.icon === "chart" && (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {template.icon === "users" && (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {template.icon === "image" && (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  {template.icon === "funnel" && (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{template.description}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Reports</CardTitle>
          <CardDescription>Manage and view generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Report</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Type</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground hidden md:table-cell">Schedule</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground hidden lg:table-cell">Last Generated</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-muted/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-2 w-2 rounded-full ${getTypeColor(report.type)}`} />
                        <span className="font-medium">{report.name}</span>
                      </div>
                    </td>
                    <td className="py-4 capitalize">{report.type}</td>
                    <td className="py-4 capitalize hidden md:table-cell">{report.schedule}</td>
                    <td className="py-4">
                      <Badge
                        variant={
                          report.status === "ready"
                            ? "accent"
                            : report.status === "generating"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {report.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-muted-foreground hidden lg:table-cell">{report.lastGenerated}</td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" disabled={report.status !== "ready"}>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="sm" disabled={report.status !== "ready"}>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </Button>
                      </div>
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
