declare global {
  interface Window {
    opera: string
    env: Record<string, string>
    MSStream: unknown
  }
}

export {}