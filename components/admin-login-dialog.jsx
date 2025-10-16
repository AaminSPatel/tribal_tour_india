"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useData } from "@/context/data-context"

export function AdminLoginDialog({ onClose }) {
  const [key, setKey] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const { login, ADMIN_KEY } = useData()

  const submit = (e) => {
    e.preventDefault()
    if (key === ADMIN_KEY) {
      login(key)
      onClose?.()
      router.push("/admin")
    } else {
      setError("Invalid key. Hint: ask your guide.")
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-lg border border-border bg-card p-6 shadow-xl">
        <h2 className="font-serif text-lg">Admin Access</h2>
        <p className="mt-2 text-sm text-muted-foreground">Enter the secret key to access the admin panel.</p>
        <form onSubmit={submit} className="mt-4 grid gap-3">
          <input
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            type="password"
            placeholder="Secret key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          {error ? <div className="text-sm text-destructive">{error}</div> : null}
          <div className="flex items-center justify-end gap-2">
            <button type="button" onClick={onClose} className="rounded px-3 py-2 text-sm">
              Cancel
            </button>
            <button type="submit" className="rounded bg-primary px-3 py-2 text-sm text-primary-foreground">
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
