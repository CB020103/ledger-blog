export default function Ticker({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null
  return (
    <div className="ticker-strip">
      {items.map((item, i) => (
        <span key={i} className="ticker-item">
          {item}
        </span>
      ))}
    </div>
  )
}
