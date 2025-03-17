// pages/api/google-reviews.js
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const API_KEY = process.env.SERP_API_KEY; // Ganti dengan API Key SerpAPI kamu
  const PLACE_ID = 'ChIJVWjj8-0mcC4Rulpc2sjXTbY'; // Ganti dengan Place ID lokasi kamu

  const url = `https://serpapi.com/search.json?engine=google_maps_reviews&hl=en&place_id=${PLACE_ID}&sort_by=ratingHigh&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.reviews) {
      return NextResponse.json(
        { error: 'Gagal mengambil data' },
        { status: 500 }
      );
    }

    const { reviews } = data;
    return NextResponse.json({ reviews });
  } catch (error) {
    return NextResponse.json({ error: 'Terjadi kesalahan' }, { status: 500 });
  }
}
