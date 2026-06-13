function SummaryCard({ results }) {
  const total = results.length
  const positive = results.filter(r => r.sentiment === 'Positive').length
  const negative = results.filter(r => r.sentiment === 'Negative').length
  const neutral = results.filter(r => r.sentiment === 'Neutral').length

  const themeCounts = results.reduce((acc, r) => {
    if (r.theme) acc[r.theme] = (acc[r.theme] || 0) + 1
    return acc
  }, {})

  const topTheme = Object.entries(themeCounts).sort((a, b) => b[1] - a[1])[0]

  const scorePercent = Math.round((positive / total) * 100)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-base font-semibold text-gray-700 mb-4">
        📋 Analysis Summary
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{total}</p>
          <p className="text-xs text-gray-500 mt-1">Total Reviews</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-600">{positive}</p>
          <p className="text-xs text-gray-500 mt-1">Positive</p>
        </div>
        <div className="bg-red-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-red-500">{negative}</p>
          <p className="text-xs text-gray-500 mt-1">Negative</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-orange-500">
            {topTheme ? topTheme[0] : 'N/A'}
          </p>
          <p className="text-xs text-gray-500 mt-1">Top Theme</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Satisfaction Score</span>
          <span className="font-semibold text-gray-700">{scorePercent}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${scorePercent}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default SummaryCard