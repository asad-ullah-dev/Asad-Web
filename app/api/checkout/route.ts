import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SCRET_KEY as string, {

});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      price,
      image,
      rating,
      reviews,
    } = body;

    const currency = email.endsWith('.pk') ? 'pkr' : 'usd';
    const multiplier = 280; // cents/paisa

    const customer = await stripe.customers.create({
      name,
      email,
      metadata: {
        rating: rating?.toString() || '0',
        reviews: reviews?.toString() || '0',
      },
    });

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount: Math.round(price * multiplier), // convert to cents/paisa
            product_data: {
              name: name || 'Unnamed Product',
              images: image ? [image] : [],
              metadata: {
                rating: rating?.toString() || '0',
                reviews: reviews?.toString() || '0',
              },
            },
          },
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3001/success',
      cancel_url: 'http://localhost:3001/cancel',
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
