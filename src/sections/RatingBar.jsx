import './RatingBar.css'

const STATS = [
  { value: '11', label: 'Locations' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '10K+', label: 'Happy Clients' },
  { value: '8+', label: 'Years of Excellence' },
]

export default function RatingBar() {
  return (
    <div className="rating-bar">
      <div className="rating-bar__inner container">
        {STATS.map((stat, i) => (
          <div key={i} className="rating-bar__stat">
            <span className="rating-bar__value">{stat.value}</span>
            <span className="rating-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
