"use client"

import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"

export function GdprAnalytics() {
    const [consent, setConsent] = useState<boolean>(false)

    useEffect(() => {
        // 1. Initial check
        const checkConsent = () => {
            const stored = localStorage.getItem("alftian-cookie-consent")
            setConsent(stored === "true")
        }

        checkConsent()

        // 2. Listen for updates from CookieBanner
        window.addEventListener("cookie-consent-updated", checkConsent)

        return () => {
            window.removeEventListener("cookie-consent-updated", checkConsent)
        }
    }, [])

    if (!consent) return null

    return <Analytics />
}
