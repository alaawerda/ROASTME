import { IndexNowSubmitter } from 'indexnow-submitter';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { urls } = await request.json();

  if (!urls || !Array.isArray(urls)) {
    return NextResponse.json({ message: 'Invalid URL list provided.' }, { status: 400 });
  }

  const host = process.env.NEXT_PUBLIC_SITE_URL;
  const key = process.env.INDEXNOW_API_KEY;

  if (!host || !key) {
    return NextResponse.json({ message: 'Missing required environment variables for IndexNow.' }, { status: 500 });
  }



  const submitter = new IndexNowSubmitter({
    host,
    key,


  });

  try {
    const result = await submitter.submitUrls(urls);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
