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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState("general");

  const tabs = [
    { id: "general", label: "General" },
    { id: "ai", label: "AI Models" },
    { id: "notifications", label: "Notifications" },
    { id: "team", label: "Team" },
    { id: "billing", label: "Billing" },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account and platform preferences.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* General Settings */}
      {activeTab === "general" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Company Name" defaultValue="Acme Inc." />
                <Input label="Email" type="email" defaultValue="jake@acme.com" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Website" defaultValue="https://acme.com" />
                <Input label="Industry" defaultValue="Technology" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timezone & Currency</CardTitle>
              <CardDescription>Regional preferences for reporting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Timezone</label>
                  <select className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm">
                    <option>America/New_York (EST)</option>
                    <option>America/Los_Angeles (PST)</option>
                    <option>Europe/London (GMT)</option>
                    <option>Europe/Paris (CET)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Currency</label>
                  <select className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm">
                    <option>USD ($)</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>CAD</option>
                  </select>
                </div>
              </div>
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* AI Models Settings */}
      {activeTab === "ai" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Model Configuration</CardTitle>
              <CardDescription>Choose and configure AI models for your assistant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Primary Model */}
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-black flex items-center justify-center text-white">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">GPT-4o</h3>
                      <p className="text-sm text-muted-foreground">OpenAI - Primary Model</p>
                    </div>
                  </div>
                  <Badge variant="accent">Active</Badge>
                </div>
                <div className="space-y-3">
                  <Input label="API Key" type="password" defaultValue="sk-proj-xxxxxxxxxxxx" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Temperature</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="70"
                        className="w-full"
                      />
                      <p className="text-xs text-muted-foreground mt-1">0.7 - Balanced</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Max Tokens</label>
                      <select className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm">
                        <option>4,096</option>
                        <option>8,192</option>
                        <option>16,384</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Models */}
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">
                      C
                    </div>
                    <div>
                      <h3 className="font-semibold">Claude 3 Opus</h3>
                      <p className="text-sm text-muted-foreground">Anthropic - Backup Model</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <div>
                      <h3 className="font-semibold">Gemini Pro</h3>
                      <p className="text-sm text-muted-foreground">Google - Analytics Model</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Behavior</CardTitle>
              <CardDescription>Customize how the AI assistant responds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">Auto-generate insights</p>
                  <p className="text-sm text-muted-foreground">Automatically analyze campaign performance daily</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary transition-colors"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">Proactive recommendations</p>
                  <p className="text-sm text-muted-foreground">Suggest optimizations without being asked</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary transition-colors"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">Include competitor analysis</p>
                  <p className="text-sm text-muted-foreground">Factor in market trends when analyzing</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary transition-colors"></div>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Notifications Settings */}
      {activeTab === "notifications" && (
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose what updates you want to receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Campaign alerts", description: "Get notified about significant campaign changes" },
              { label: "Budget warnings", description: "Alert when campaigns approach budget limits" },
              { label: "Performance reports", description: "Weekly and monthly performance summaries" },
              { label: "AI insights", description: "New recommendations from the AI assistant" },
              { label: "Team activity", description: "Updates on team member actions" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={index < 3} className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary transition-colors"></div>
                </label>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Team Settings */}
      {activeTab === "team" && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage who has access to your dashboard</CardDescription>
              </div>
              <Button>
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Invite Member
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Jake K.", email: "jake@acme.com", role: "Admin", status: "active" },
                { name: "Sarah M.", email: "sarah@acme.com", role: "Editor", status: "active" },
                { name: "Mike L.", email: "mike@acme.com", role: "Viewer", status: "active" },
                { name: "Lisa R.", email: "lisa@acme.com", role: "Editor", status: "pending" },
              ].map((member, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={member.status === "active" ? "accent" : "secondary"}>
                      {member.role}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Billing Settings */}
      {activeTab === "billing" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>Manage your subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-lg border border-primary bg-primary/5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Professional Plan</h3>
                    <p className="text-sm text-muted-foreground">Billed monthly</p>
                  </div>
                  <Badge variant="accent">Active</Badge>
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited campaigns
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All platform integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI Assistant (GPT-4o)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    5 team members
                  </li>
                </ul>
                <div className="flex gap-2">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="ghost">Cancel Subscription</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-14 rounded bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div>
                    <p className="font-medium">**** **** **** 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Update</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
