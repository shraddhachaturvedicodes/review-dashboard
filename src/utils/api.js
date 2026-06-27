const API_BASE = 'http://localhost:5000/api'

export async function getAnalyses() {
  const res = await fetch(`${API_BASE}/analyses`)
  if (!res.ok) throw new Error('Failed to fetch analyses')
  return res.json()
}

export async function createAnalysis(data) {
  const res = await fetch(`${API_BASE}/analyses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Failed to save analysis')
  return res.json()
}

export async function deleteAnalysis(id) {
  const res = await fetch(`${API_BASE}/analyses/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error('Failed to delete analysis')
  return true
}