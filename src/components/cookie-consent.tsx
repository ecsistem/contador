"use client"

import { useState, useEffect } from "react"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Necessary cookies are always enabled
    analytics: true,
    marketing: true,
    preferences: true,
  })

  // Check if user has already made a choice
  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie-consent")
    if (!hasConsent) {
      setShowBanner(true)
    }
  }, [])

  // Accept all cookies
  const acceptAll = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        accepted: true,
        date: new Date().toISOString(),
        preferences: {
          necessary: true,
          analytics: true,
          marketing: true,
          preferences: true,
        },
      }),
    )
    setShowBanner(false)
  }

  // Reject non-essential cookies
  const rejectNonEssential = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        accepted: false,
        date: new Date().toISOString(),
        preferences: {
          necessary: true,
          analytics: false,
          marketing: false,
          preferences: false,
        },
      }),
    )
    setShowBanner(false)
  }

  // Save preferences
  const savePreferences = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        accepted: true,
        date: new Date().toISOString(),
        preferences,
      }),
    )
    setShowPreferences(false)
    setShowBanner(false)
  }

  // Handle preference change
  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Cannot change necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center gap-3">
            <Cookie className="h-5 w-5 text-pink-500 flex-shrink-0" />
            <p className="text-sm flex-grow">Usamos cookies para melhorar sua experiência.</p>
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="border-pink-200 hover:bg-pink-50 text-xs h-8"
                onClick={() => setShowPreferences(true)}
              >
                Personalizar
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-pink-200 hover:bg-pink-50 text-xs h-8"
                onClick={rejectNonEssential}
              >
                Recusar
              </Button>
              <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white text-xs h-8" onClick={acceptAll}>
                Aceitar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle>Preferências de Cookies</DialogTitle>
            <DialogDescription>Personalize suas preferências de cookies.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Cookies Essenciais</Label>
              </div>
              <Switch checked={preferences.necessary} disabled />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Cookies Analíticos</Label>
              </div>
              <Switch checked={preferences.analytics} onCheckedChange={() => handlePreferenceChange("analytics")} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Cookies de Marketing</Label>
              </div>
              <Switch checked={preferences.marketing} onCheckedChange={() => handlePreferenceChange("marketing")} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Cookies de Preferências</Label>
              </div>
              <Switch checked={preferences.preferences} onCheckedChange={() => handlePreferenceChange("preferences")} />
            </div>
          </div>
          <DialogFooter>
            <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white" onClick={savePreferences}>
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

