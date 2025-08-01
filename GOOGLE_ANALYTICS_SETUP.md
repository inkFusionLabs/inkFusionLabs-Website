# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Follow the setup wizard to create your account
4. Create a new property for your website
5. Get your Measurement ID (starts with "G-")

## Step 2: Update Tracking ID

1. Open `src/app/components/GoogleAnalytics.tsx`
2. Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID
3. Save the file

## Step 3: Deploy and Verify

1. Commit and push your changes
2. Deploy to Vercel
3. Visit your website
4. Check Google Analytics Real-Time reports to verify tracking is working

## What's Included

- **Page Views**: Automatic tracking of all page visits
- **User Sessions**: Track user engagement and session duration
- **Traffic Sources**: See where your visitors come from
- **Real-Time Data**: Monitor live visitor activity
- **Custom Events**: Ready for future event tracking

## Privacy Compliance

The implementation includes:
- Respects user privacy preferences
- No personal data collection
- Compliant with GDPR requirements
- Uses Next.js Script component for optimal loading

## Testing

After deployment, you can test by:
1. Opening Google Analytics Real-Time reports
2. Visiting your website
3. Confirming your visit appears in the real-time data 