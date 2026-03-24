// Vercel Serverless Function — 代理 Agoda Affiliate API
// 環境變數: AGODA_SITE_ID, AGODA_API_KEY

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const siteId = process.env.AGODA_SITE_ID
  const apiKey = process.env.AGODA_API_KEY

  if (!siteId || !apiKey) {
    return res.status(500).json({ error: 'Server configuration error' })
  }

  try {
    const { cityId, hotelId, checkIn, checkOut, adults = 2, children = 0 } = req.body

    if (!checkIn || !checkOut) {
      return res.status(400).json({ error: 'checkIn and checkOut are required' })
    }

    if (!cityId && !hotelId) {
      return res.status(400).json({ error: 'cityId or hotelId is required' })
    }

    // 組裝 Agoda API request body
    const criteria = {
      checkInDate: checkIn,
      checkOutDate: checkOut,
    }

    if (hotelId) {
      // Hotel list search
      criteria.hotelId = Array.isArray(hotelId) ? hotelId : [hotelId]
    } else {
      // City search
      criteria.cityId = cityId
    }

    criteria.additional = {
      currency: 'TWD',
      language: 'zh-tw',
      occupancy: {
        numberOfAdult: adults,
        numberOfChildren: children,
      },
      sortBy: 'Recommended',
      maxResult: 10,
      minimumStarRating: 0,
      minimumReviewScore: 0,
      discountOnly: false,
    }

    const agodaResponse = await fetch(
      'http://affiliateapi7643.agoda.com/affiliateservice/lt_v1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip,deflate',
          Authorization: `${siteId}:${apiKey}`,
        },
        body: JSON.stringify({ criteria }),
      }
    )

    const data = await agodaResponse.json()

    if (data.error) {
      return res.status(404).json({ error: data.error.message || 'No results found' })
    }

    return res.status(200).json(data)
  } catch (err) {
    console.error('Agoda API error:', err)
    return res.status(500).json({ error: 'Failed to fetch hotel data' })
  }
}
