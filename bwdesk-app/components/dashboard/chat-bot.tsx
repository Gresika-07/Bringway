"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your BWDesk assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("connect") || input.includes("connection")) {
      return "To connect to a remote computer, enter the BWDesk ID in the Remote Computer section and click Connect. Make sure the remote computer is online and has BWDesk running."
    } else if (input.includes("record") || input.includes("recording")) {
      return "To start recording your session, click the 'Start Recording' button in Quick Actions. You can stop recording anytime and the file will be saved to your Downloads folder."
    } else if (input.includes("file") || input.includes("transfer")) {
      return "You can transfer files by clicking 'File Transfer' when connected to a remote computer, or use the File Manager in Quick Actions to browse and manage files."
    } else if (input.includes("password") || input.includes("security")) {
      return "Your session password is automatically generated for security. You can regenerate it anytime by clicking the refresh button next to your BWDesk ID."
    } else if (input.includes("help") || input.includes("support")) {
      return "I can help you with connections, file transfers, recording sessions, security settings, and general BWDesk usage. What specific topic would you like help with?"
    } else {
      return "I understand you're asking about BWDesk. Could you be more specific? I can help with connections, file transfers, recording, security, or general usage questions."
    }
  }

  if (isMinimized) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center space-x-2">
              <Bot className="h-4 w-4 text-yellow-400" />
              <span>BWDesk Assistant</span>
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsMinimized(false)}>
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm flex items-center space-x-2">
            <Bot className="h-4 w-4 text-yellow-400" />
            <span>BWDesk Assistant</span>
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsMinimized(true)}>
            <Minimize2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-64 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 text-yellow-400" />}
                    {message.sender === "user" && <User className="h-4 w-4 mt-0.5" />}
                    <div className="text-sm">{message.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              placeholder="Ask me anything about BWDesk..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={!inputMessage.trim()}
              size="sm"
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
