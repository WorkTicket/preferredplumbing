/** Pass-through wrapper — page fade animations hurt Speed Index / LCP. */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
