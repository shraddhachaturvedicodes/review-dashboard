import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

function Dashboard({ results }) {
  // Calculate sentiment counts
  const sentimentCounts = results.reduce((acc, r) => {
    acc[r.sentiment] = (acc[r.sentiment] || 0) + 1
    return acc
  }, {})

  const sentimentData = [
    { name: 'Positive', count: sentimentCounts['Positive'] || 0, color: '#22c55e' },
    { name: 'Neutral', count: sentimentCounts['Neutral'] || 0, color: '#eab308' },
    { name: 'Negative', count: sentimentCounts['Negative'] || 0, color: '#ef4444' }
  ]

  // Calculate theme counts
  const themeCounts = results.reduce((acc, r) => {
    if (r.theme) acc[r.theme] = (acc[r.theme] || 0) + 1
    return acc
  }, {})

  const themeData = Object.entries(themeCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)

  const themeColors = {
    Food: '#f97316',
    Host: '#3b82f6',
    Cleanliness: '#a855f7',
    Location: '#14b8a6',
    Value: '#ec4899',
    Experience: '#6366f1'
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Sentiment Chart */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-base font-semibold text-gray-700 mb-4">
          😊 Sentiment Distribution
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="count" radius={[6, 6, 0, 0]}>
              {sentimentData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Theme Chart */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-base font-semibold text-gray-700 mb-4">
          🏷️ Theme Frequency
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={themeData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" allowDecimals={false} tick={{ fontSize: 12 }} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={80} />
            <Tooltip />
            <Bar dataKey="count" radius={[0, 6, 6, 0]}>
              {themeData.map((entry, index) => (
                <Cell key={index} fill={themeColors[entry.name] || '#94a3b8'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard