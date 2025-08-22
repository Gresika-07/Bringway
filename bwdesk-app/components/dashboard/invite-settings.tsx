"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import {
  Settings,
  Shield,
  Volume2,
  RotateCcw,
  Lock,
  UserX,
  Wifi,
  ChevronDown,
  Trash2,
  MoreVertical,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function InviteSettings() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    hearDeviceSound: true,
    restartDevice: false,
    privacyMode: true,
    blockIP: false,
    lockDevice: false,
    signOutRemoteUser: false,
    autoAccept: false,
    requirePassword: true,
  })

  const [showAllSettings, setShowAllSettings] = useState(false)

  const handleSettingChange = (key: string, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
    toast({
      title: "Setting Updated",
      description: `${key.replace(/([A-Z])/g, " $1").toLowerCase()} has been ${value ? "enabled" : "disabled"}`,
    })
  }

  const saveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your default invite settings have been saved successfully",
    })
  }

  const resetSettings = () => {
    setSettings({
      hearDeviceSound: true,
      restartDevice: false,
      privacyMode: true,
      blockIP: false,
      lockDevice: false,
      signOutRemoteUser: false,
      autoAccept: false,
      requirePassword: true,
    })
    toast({
      title: "Settings Reset",
      description: "All settings have been reset to default values",
    })
  }

  const defaultSettings = [
    { key: "hearDeviceSound", label: "Hear Device Sound", icon: Volume2 },
    { key: "privacyMode", label: "Enable Privacy Mode", icon: Shield },
    { key: "requirePassword", label: "Require Password", icon: Lock },
  ]

  const advancedSettings = [
    { key: "restartDevice", label: "Restart My Device", icon: RotateCcw },
    { key: "blockIP", label: "Block IP", icon: Wifi },
    { key: "lockDevice", label: "Lock Device", icon: Lock },
    { key: "signOutRemoteUser", label: "Sign Out Remote User", icon: UserX },
    { key: "autoAccept", label: "Auto Accept Connections", icon: Shield },
  ]

  return (
    <Card className="relative overflow-hidden dark:bg-gray-900/50 dark:border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFC700]/5 to-transparent" />

      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center dark:text-white">
              <Settings className="w-5 h-5 mr-2 text-[#FFC700]" />
              Default Invite Settings
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Configure default permissions for incoming connections
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="dark:border-gray-700 dark:text-gray-300">
              Free License
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 dark:hover:bg-gray-800">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="dark:bg-gray-900 dark:border-gray-700">
                <DropdownMenuItem
                  onClick={() => setShowAllSettings(!showAllSettings)}
                  className="dark:hover:bg-gray-800"
                >
                  Show All Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={resetSettings} className="dark:hover:bg-gray-800">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Reset to Default
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative space-y-6">
        <div className="space-y-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between bg-transparent dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Default Options ({defaultSettings.filter((s) => settings[s.key as keyof typeof settings]).length}{" "}
                enabled)
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2 dark:bg-gray-900 dark:border-gray-700">
              {defaultSettings.map((setting) => {
                const Icon = setting.icon
                return (
                  <div
                    key={setting.key}
                    className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <Checkbox
                      id={`dropdown-${setting.key}`}
                      checked={settings[setting.key as keyof typeof settings]}
                      onCheckedChange={(checked) => handleSettingChange(setting.key, !!checked)}
                      className="data-[state=checked]:bg-[#FFC700] data-[state=checked]:border-[#FFC700]"
                    />
                    <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <Label htmlFor={`dropdown-${setting.key}`} className="flex-1 cursor-pointer dark:text-gray-300">
                      {setting.label}
                    </Label>
                  </div>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {showAllSettings && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 border rounded-lg bg-muted/20 dark:border-gray-700 dark:bg-gray-800/20">
              <div className="space-y-4">
                {defaultSettings.map((setting) => {
                  const Icon = setting.icon
                  return (
                    <div key={setting.key} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        <Label htmlFor={setting.key} className="dark:text-gray-300">
                          {setting.label}
                        </Label>
                      </div>
                      <Switch
                        id={setting.key}
                        checked={settings[setting.key as keyof typeof settings]}
                        onCheckedChange={(checked) => handleSettingChange(setting.key, checked)}
                      />
                    </div>
                  )
                })}
              </div>

              <div className="space-y-4">
                {advancedSettings.map((setting) => {
                  const Icon = setting.icon
                  return (
                    <div key={setting.key} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        <Label htmlFor={setting.key} className="dark:text-gray-300">
                          {setting.label}
                        </Label>
                      </div>
                      <Switch
                        id={setting.key}
                        checked={settings[setting.key as keyof typeof settings]}
                        onCheckedChange={(checked) => handleSettingChange(setting.key, checked)}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-4 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="session-password" className="dark:text-gray-300">
                Session Password
              </Label>
              <Input
                id="session-password"
                type="password"
                placeholder="Enter default password"
                className="w-64 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={resetSettings}
                className="dark:border-gray-700 dark:hover:bg-gray-800 bg-transparent"
              >
                Reset
              </Button>
              <Button onClick={saveSettings} className="bg-[#FFC700] hover:bg-[#FFD700] text-black">
                Save Settings
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg dark:bg-gray-800/50">
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            <strong>Note:</strong> These settings will be applied to all new incoming connections. You can override them
            for individual sessions. Upgrade to Premium for advanced security features.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
