"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="transition-colors">
        {(theme === "dark" ? <Sun className="transition-all text-gray-50" /> : <Moon className="transition-all text-gray-900"/>)}
    </button>
  )
}
