const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export async function analyzeReview(reviewText) {
  const prompt = `
You are a hospitality review analyst for an eco-homestay in Uttarakhand, India.
Analyze the following guest review and return ONLY a valid JSON object with exactly these three fields:

- "sentiment": MUST be exactly one of these three values: "Positive", "Neutral", "Negative"
- "theme": MUST be exactly one of these six values: "Food", "Host", "Cleanliness", "Location", "Value", "Experience"
- "response": a professional one-line management response between 10 and 20 words. This field must NEVER be empty.

Rules:
1. "theme" must ONLY be one of the six values listed above. Never use "Positive", "Negative", or "Neutral" as a theme.
2. "response" must always be a complete sentence. Never return an empty string.
3. If the review mentions overall satisfaction or general experience, use "Experience" as the theme.
4. If the review mentions pricing or value for money, use "Value" as the theme.
5. Return ONLY the JSON object. No markdown, no explanation, no extra text.

Review: "${reviewText}"
`

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
      'HTTP-Referer': 'http://localhost:5173',
      'X-Title': 'GuestLens'
    },
    body: JSON.stringify({
      model: 'google/gemma-4-31b-it:free',
      messages: [{ role: 'user', content: prompt }]
    })
  })

  const data = await res.json()

  if (!data.choices || data.choices.length === 0) {
    throw new Error(JSON.stringify(data))
  }

  const raw = data.choices[0].message.content
  const cleaned = raw.replace(/```json|```/g, '').trim()
  return JSON.parse(cleaned)
}

export async function analyzeReviewsSequentially(reviews, onProgress) {
  const results = []
  for (let i = 0; i < reviews.length; i++) {
    const result = await analyzeReview(reviews[i])
    results.push({ review: reviews[i], ...result })
    onProgress(i + 1, reviews.length)
    if (i < reviews.length - 1) {
      await sleep(1500)
    }
  }
  return results
}