"use client"
import { useEffect, useRef } from "react"
import { useData } from "@/context/data-context"

export default function SecretAdminTrigger() {
  const { setShowAdminLogin } = useData()
  const clicksRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const onClick = () => {
    clicksRef.current += 1
    if (clicksRef.current >= 5) {
      clicksRef.current = 0
      setShowAdminLogin(true)
    }
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => (clicksRef.current = 0), 1200)
  }

  return (
    <button
      aria-label="Open admin login"
      onClick={onClick}
      className="fixed bottom-2 right-2 h-4 w-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-[0px]"
      title=""
    >
      •
    </button>
  )
}
