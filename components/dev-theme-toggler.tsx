"use client"

import React from "react"
import { useTheme } from "next-themes"
import { BsMoonFill, BsSunFill } from "react-icons/bs"

export default function DevThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (process.env.NODE_ENV !== "development") return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 z-50 bg-black text-white h-10 w-10 flex items-center justify-center outline-none border-none rounded-full"
    >
      {resolvedTheme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </button>
  )
}
