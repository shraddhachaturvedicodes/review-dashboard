const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

export async function analyzeReview(reviewText) {
  const prompt = `
You are a hospitality review analyst for an eco-homestay in Uttarakhand, India.
Analyze the following guest review and return ONLY a valid JSON object with exactly these three fields:
- "sentiment": one of "Positive", "Neutral", or "Negative"
- "theme": one of "Food", "Host", "Cleanliness", "Location", "Value", "Experience"
- "response": a professional one-line management response (max 20 words)

Do not include any explanation, markdown, or extra text. Only return the JSON object.

Review: "${reviewText}"
`

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
      'HTTP-Referer': 'http://localhost:5173',
      'X-Title': 'Guest Review Dashboard'
    },
    body: JSON.stringify({
      model: 'google/gemma-4-31b-it:free',
      messages: [{ role: 'user', content: prompt }]
    })
  })

  const data = await res.json()
  console.log('OpenRouter response:', JSON.stringify(data))

  if (!data.choices || data.choices.length === 0) {
    throw new Error(JSON.stringify(data))
  }

  const raw = data.choices[0].message.content
  const cleaned = raw.replace(/```json|```/g, '').trim()
  return JSON.parse(cleaned)
}