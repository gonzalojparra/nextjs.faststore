import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { cartId } = req.body

  try {
    const response = await fetch(
      `https://ecommitmentpartnerar.vtexcommercestable.com.br/api/checkout/pub/orderForm/${cartId}/items`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-VTEX-API-AppKey': process.env.VTEX_APP_KEY as string,
          'X-VTEX-API-AppToken': process.env.VTEX_APP_TOKEN as string,
        },
        body: JSON.stringify({
          orderItems: [
            {
              quantity: 1,
              seller: '1',
              id: '1',
              index: 0,
              price: 1099,
            },
          ],
        }),
      }
    )

    const data = await response.json()

    return res.status(200).json(data)
  } catch (error) {
    console.error('Error:', error)

    return res.status(500).json({ message: 'Internal server error' })
  }
}
