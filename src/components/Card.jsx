function Card({ icon, tag, title, description }) {
  return (
    <div
      className="bg-white rounded-2xl p-6 border border-stone-200 hover:shadow-md transition-all hover:border-orange-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#fff3eb' }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        {tag && (
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: '#e8682a' }}
          >
            {tag}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-base text-gray-800 mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{description}</p>
    </div>
  )
}

export default Card