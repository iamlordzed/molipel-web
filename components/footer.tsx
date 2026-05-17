export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-8 text-primary-foreground">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-sm font-semibold">
          Distribuidora Industrial R.C.O
        </p>
        <p className="mt-1 text-xs text-primary-foreground/70">
          Molipel Premium &mdash; Industria Argentina
        </p>
        <p className="mt-3 text-xs text-primary-foreground/50">
          {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
