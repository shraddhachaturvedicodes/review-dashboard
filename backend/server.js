const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// In-memory data store
let analyses = [
  {
    id: 1,
    review: "The host was incredibly warm and welcoming, made our stay memorable.",
    sentiment: "Positive",
    theme: "Host",
    response: "We're so glad you felt at home with us. Thank you for the kind words!",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    review: "Food was below expectations for the price we paid.",
    sentiment: "Negative",
    theme: "Food",
    response: "We sincerely apologize and are working to improve our menu quality.",
    createdAt: new Date().toISOString()
  }
]
let nextId = 3

// Helper — find analysis by id
const findAnalysis = (id) => analyses.find(a => a.id === parseInt(id))

// GET /api/analyses — list all
app.get('/api/analyses', (req, res) => {
  res.status(200).json(analyses)
})

// GET /api/analyses/search?theme=Food&sentiment=Positive — search/filter
app.get('/api/analyses/search', (req, res) => {
  const { theme, sentiment, q } = req.query
  let results = analyses

  if (theme) {
    results = results.filter(a => a.theme.toLowerCase() === theme.toLowerCase())
  }
  if (sentiment) {
    results = results.filter(a => a.sentiment.toLowerCase() === sentiment.toLowerCase())
  }
  if (q) {
    results = results.filter(a => a.review.toLowerCase().includes(q.toLowerCase()))
  }

  res.status(200).json(results)
})

// GET /api/analyses/:id — get single
app.get('/api/analyses/:id', (req, res) => {
  const analysis = findAnalysis(req.params.id)
  if (!analysis) {
    return res.status(404).json({ error: 'Analysis not found' })
  }
  res.status(200).json(analysis)
})

// POST /api/analyses — create new
app.post('/api/analyses', (req, res) => {
  const { review, sentiment, theme, response } = req.body

  if (!review || !sentiment || !theme || !response) {
    return res.status(400).json({ error: 'review, sentiment, theme, and response are all required' })
  }

  const newAnalysis = {
    id: nextId++,
    review,
    sentiment,
    theme,
    response,
    createdAt: new Date().toISOString()
  }

  analyses.push(newAnalysis)
  res.status(201).json(newAnalysis)
})

// PUT /api/analyses/:id — update
app.put('/api/analyses/:id', (req, res) => {
  const analysis = findAnalysis(req.params.id)
  if (!analysis) {
    return res.status(404).json({ error: 'Analysis not found' })
  }

  const { review, sentiment, theme, response } = req.body
  if (review !== undefined) analysis.review = review
  if (sentiment !== undefined) analysis.sentiment = sentiment
  if (theme !== undefined) analysis.theme = theme
  if (response !== undefined) analysis.response = response

  res.status(200).json(analysis)
})

// DELETE /api/analyses/:id — delete
app.delete('/api/analyses/:id', (req, res) => {
  const index = analyses.findIndex(a => a.id === parseInt(req.params.id))
  if (index === -1) {
    return res.status(404).json({ error: 'Analysis not found' })
  }
  analyses.splice(index, 1)
  res.status(204).send()
})

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong on the server' })
})

app.listen(PORT, () => {
  console.log(`✅ GuestLens backend running on http://localhost:${PORT}`)
})