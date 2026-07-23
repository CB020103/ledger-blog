function getDirectionClass(item: string) {
  if (/[+]\s?\d/.test(item)) return 'text-up'
  if (/-\s?\d/.test(item)) return 'text-down'
  return 'text-ink'
}

export default function Ticker({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null
  return (
    <div className="ticker-strip">
      {items.map((item, i) => (
        <span key={i} className={`ticker-item ${getDirectionClass(item)}`}>
          {item}
        </span>
      ))}
    </div>
  )
}
