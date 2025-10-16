"use client"
import { useState } from "react"
import { useData } from "@/context/data-context"

export default function AdminLogin() {
  const { showAdminLogin, setShowAdminLogin, loginAdmin } = useData()
  const [pw, setPw] = useState("")
  const [err, setErr] = useState("")

  if (!showAdminLogin) return null

  const submit = (e) => {
    e.preventDefault()
    const ok = loginAdmin(pw)
    if (ok) {
      setPw("")
      setErr("")
      setShowAdminLogin(false)
    } else {
      setErr("Incorrect secret. Try again.")
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-lg bg-background border p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Admin Access</h2>
        <form onSubmit={submit} className="space-y-3">
          <label className="block text-sm">
            Secret Key
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 bg-card"
              placeholder="Enter secret"
            />
          </label>
          {err ? <p className="text-sm text-red-600">{err}</p> : null}
          <div className="flex items-center gap-2">
            <button type="submit" className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
              Login
            </button>
            <button type="button" onClick={() => setShowAdminLogin(false)} className="px-3 py-2 rounded-md border">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
