"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface SuggestedAction {
  label: string;
  action: string;
}

const suggestedActions: SuggestedAction[] = [
  { label: "File a new claim", action: "I need to file a new insurance claim" },
  { label: "Check claim status", action: "What is the status of my claim?" },
  { label: "Upload documents", action: "I need to upload documents for my claim" },
  { label: "Coverage questions", action: "I have questions about my coverage" },
];

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm your AI Claims Assistant. I can help you file claims, check claim status, answer questions about your coverage, and guide you through the claims process. How can I assist you today?",
    timestamp: new Date(),
  },
];

/**
 * AI Claims Assistant Page with interactive chat interface
 */
export default function AssistantPage() {
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("file") && lowerMessage.includes("claim")) {
      return "I'd be happy to help you file a new claim. To get started, I'll need some information:\n\n1. **Type of Insurance**: Auto, Home, Health, or Life?\n2. **Date of Incident**: When did the incident occur?\n3. **Description**: Brief description of what happened\n\nPlease provide the type of insurance first, and I'll guide you through the rest of the process.";
    }
    
    if (lowerMessage.includes("status") || lowerMessage.includes("check")) {
      return "I can help you check your claim status. Based on your account, I found the following active claims:\n\n- **CLM-2024-0892**: Auto Insurance - Status: In Review\n- **CLM-2024-0876**: Home Insurance - Status: Approved, Pending Payment\n\nWould you like more details about any of these claims?";
    }
    
    if (lowerMessage.includes("upload") || lowerMessage.includes("document")) {
      return "To upload documents for your claim, you can:\n\n1. **Drag and drop** files directly into this chat\n2. Click the **attachment button** below\n3. Use our **mobile app** to take photos directly\n\nAccepted formats: PDF, JPG, PNG (max 10MB each)\n\nWhich claim would you like to add documents to?";
    }
    
    if (lowerMessage.includes("coverage") || lowerMessage.includes("policy")) {
      return "I can help you understand your coverage. Based on your profile, you have:\n\n- **Auto Insurance**: Comprehensive coverage with $500 deductible\n- **Home Insurance**: Full replacement value coverage\n- **Health Insurance**: PPO Plan with $1,500 deductible\n\nWhat specific aspect of your coverage would you like to know more about?";
    }
    
    if (lowerMessage.includes("auto")) {
      return "Great, you want to file an **Auto Insurance** claim. Let me gather the necessary information:\n\n**Claim Form - Auto Insurance**\n\nPlease provide:\n1. Date and time of the incident\n2. Location where it occurred\n3. Description of damage\n4. Were there other vehicles involved?\n5. Police report number (if applicable)\n\nYou can provide these details one by one, and I'll fill out the form for you.";
    }

    if (lowerMessage.includes("home")) {
      return "I'll help you file a **Home Insurance** claim. Let me guide you through the process:\n\n**Claim Form - Home Insurance**\n\nPlease provide:\n1. Type of damage (water, fire, theft, weather, etc.)\n2. Date when damage was discovered\n3. Affected areas of your home\n4. Estimated value of damage\n5. Any emergency repairs made\n\nStart with the type of damage, and I'll assist you step by step.";
    }
    
    return "Thank you for your message. I understand you need assistance. Could you please provide more details about what you'd like help with? I can assist with:\n\n- Filing new claims\n- Checking claim status\n- Uploading documents\n- Understanding your coverage\n- Answering policy questions\n\nJust let me know how I can help!";
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: simulateResponse(content),
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, assistantMessage]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Header */}
      <div className="border-b border-border bg-background px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">AI Claims Assistant</h1>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-muted-foreground">Online - Ready to help</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden sm:flex">
              <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              GPT-4 Powered
            </Badge>
            <Button variant="outline" size="sm">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="ml-2 hidden sm:inline">New Chat</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3 max-w-3xl",
              message.role === "user" ? "ml-auto flex-row-reverse" : ""
            )}
          >
            <div
              className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              {message.role === "user" ? (
                <span className="text-xs font-medium">SA</span>
              ) : (
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            <Card
              className={cn(
                "max-w-[85%] md:max-w-[75%]",
                message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
              )}
            >
              <CardContent className="p-3">
                <div className={cn(
                  "text-sm whitespace-pre-wrap",
                  message.role === "user" ? "text-primary-foreground" : "text-foreground"
                )}>
                  {message.content}
                </div>
                <p className={cn(
                  "text-xs mt-2",
                  message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3 max-w-3xl">
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <Card className="bg-muted">
              <CardContent className="p-3">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Actions */}
      {messages.length === 1 && (
        <div className="px-4 md:px-6 pb-2">
          <p className="text-sm text-muted-foreground mb-2">Suggested actions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleSendMessage(action.action)}
                className="text-xs"
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t border-border bg-background p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message... (Press Enter to send)"
                className="w-full min-h-[44px] max-h-32 resize-none rounded-lg border border-input bg-background px-4 py-3 pr-12 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                rows={1}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Attach file"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
            </div>
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="shrink-0"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="ml-2 hidden sm:inline">Send</span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            AI responses are for guidance only. Always verify important information with your agent.
          </p>
        </div>
      </div>
    </div>
  );
}
