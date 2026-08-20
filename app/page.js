export default function Home() {
  const categories = [
    {
      title: "🤖 1. AI / LLM APIs",
      items: [
        { name: "Google Gemini API", url: "https://aistudio.google.com/app/apikey" },
        { name: "OpenAI API", url: "https://platform.openai.com/api-keys" },
        { name: "Anthropic Claude API", url: "https://console.anthropic.com/settings/keys" },
        { name: "Groq API", url: "https://console.groq.com/keys" },
        { name: "Mistral API", url: "https://console.mistral.ai/api-keys/" },
        { name: "Cohere API", url: "https://dashboard.cohere.com/api-keys" },
        { name: "DeepSeek API", url: "https://platform.deepseek.com/api_keys" },
        { name: "Hugging Face API", url: "https://huggingface.co/settings/tokens" },
        { name: "OpenRouter API", url: "https://openrouter.ai/keys" }
      ]
    },
    {
      title: "🔍 2. Search & Research APIs",
      items: [
        { name: "Google Custom Search", url: "https://developers.google.com/custom-search/v1/overview" },
        { name: "SerpAPI", url: "https://serpapi.com/manage-api-key" },
        { name: "Tavily Search API", url: "https://tavily.com/" },
        { name: "Brave Search API", url: "https://api.search.brave.com/app/dashboard" },
        { name: "Bing Search API", url: "https://portal.azure.com/" },
        { name: "Exa AI Search", url: "https://dashboard.exa.ai/api-keys" }
      ]
    },
    {
      title: "📧 3. Email APIs",
      items: [
        { name: "Gmail API", url: "https://console.cloud.google.com/apis/credentials" },
        { name: "Microsoft Graph (Outlook)", url: "https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade" },
        { name: "SendGrid API", url: "https://app.sendgrid.com/settings/api_keys" },
        { name: "Mailgun API", url: "https://app.mailgun.com/app/account/security/api_keys" },
        { name: "Resend API", url: "https://resend.com/api-keys" }
      ]
    },
    {
      title: "💬 4. Messaging APIs",
      items: [
        { name: "Telegram Bot API (BotFather)", url: "https://t.me/BotFather" },
        { name: "WhatsApp Cloud API", url: "https://developers.facebook.com/apps/" },
        { name: "Twilio API", url: "https://console.twilio.com/" },
        { name: "Discord Bot API", url: "https://discord.com/developers/applications" },
        { name: "Slack API", url: "https://api.slack.com/apps" }
      ]
    },
    {
      title: "📱 5. Social Media APIs",
      items: [
        { name: "YouTube Data API", url: "https://console.cloud.google.com/apis/library/youtube.googleapis.com" },
        { name: "Meta Graph API (FB/Insta)", url: "https://developers.facebook.com/" },
        { name: "LinkedIn API", url: "https://www.linkedin.com/developers/apps" },
        { name: "X (Twitter) API", url: "https://developer.x.com/en/portal/dashboard" },
        { name: "Reddit API", url: "https://www.reddit.com/prefs/apps" },
        { name: "TikTok API", url: "https://developers.tiktok.com/" }
      ]
    },
    {
      title: "📄 6. Documents & Storage",
      items: [
        { name: "Google Drive / Docs / Sheets", url: "https://console.cloud.google.com/apis/dashboard" },
        { name: "Microsoft OneDrive", url: "https://portal.azure.com/" },
        { name: "Dropbox API", url: "https://www.dropbox.com/developers/apps" },
        { name: "Notion API", url: "https://www.notion.so/my-integrations" }
      ]
    },
    {
      title: "🗄️ 7. Databases & Cloud",
      items: [
        { name: "Supabase API", url: "https://supabase.com/dashboard/project/_/settings/api" },
        { name: "Firebase Console", url: "https://console.firebase.google.com/" },
        { name: "Airtable API Key / Token", url: "https://airtable.com/create/tokens" },
        { name: "MongoDB Atlas", url: "https://cloud.mongodb.com/" }
      ]
    },
    {
      title: "🧠 8. Vector DBs / RAG Memory",
      items: [
        { name: "Pinecone API", url: "https://app.pinecone.io/" },
        { name: "Qdrant Cloud API", url: "https://cloud.qdrant.io/" },
        { name: "Weaviate Cloud", url: "https://console.weaviate.cloud/" }
      ]
    },
    {
      title: "🎙️ 9. Voice & Audio APIs",
      items: [
        { name: "ElevenLabs API", url: "https://elevenlabs.io/app/speech-synthesis" },
        { name: "Google Speech-to-Text", url: "https://console.cloud.google.com/" },
        { name: "Deepgram API", url: "https://console.deepgram.com/" },
        { name: "AssemblyAI API", url: "https://www.assemblyai.com/app" }
      ]
    },
    {
      title: "🖼️ 10. Image & Video AI APIs",
      items: [
        { name: "Stability AI API", url: "https://platform.stability.ai/account/keys" },
        { name: "Replicate API", url: "https://replicate.com/account/api-tokens" },
        { name: "Runway ML", url: "https://app.runwayml.com/" },
        { name: "Cloudinary API", url: "https://console.cloudinary.com/" }
      ]
    },
    {
      title: "📍 11. Maps & Location",
      items: [
        { name: "Google Maps Platform", url: "https://console.cloud.google.com/google/maps-apis/credentials" },
        { name: "Mapbox API Token", url: "https://account.mapbox.com/" }
      ]
    },
    {
      title: "💳 12. Payments & Gateway",
      items: [
        { name: "Stripe API Keys", url: "https://dashboard.stripe.com/apikeys" },
        { name: "PayPal Developer", url: "https://developer.paypal.com/dashboard/applications/" },
        { name: "JazzCash / Easypaisa Developer", url: "https://sandbox.jazzcash.com.pk/" }
      ]
    },
    {
      title: "🛒 13. E-commerce APIs",
      items: [
        { name: "Shopify Admin API", url: "https://partners.shopify.com/" },
        { name: "WooCommerce REST API", url: "https://woocommerce.com/" },
        { name: "Amazon Selling Partner API", url: "https://developer-docs.amazon.com/" }
      ]
    },
    {
      title: "👥 14. CRM & Sales",
      items: [
        { name: "HubSpot API Key", url: "https://app.hubspot.com/" },
        { name: "Salesforce Developer", url: "https://developer.salesforce.com/" },
        { name: "Zoho CRM API", url: "https://api-console.zoho.com/" }
      ]
    },
    {
      title: "📅 15. Calendar & Scheduling",
      items: [
        { name: "Google Calendar API", url: "https://console.cloud.google.com/apis/library/calendar-json.googleapis.com" },
        { name: "Calendly API", url: "https://calendly.com/integrations/api_subscriptions" }
      ]
    },
    {
      title: "🛡️ 16. Authentication & Security",
      items: [
        { name: "Auth0 Dashboard", url: "https://manage.auth0.com/" },
        { name: "Clerk Auth API", url: "https://dashboard.clerk.com/" }
      ]
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '30px 15px', backgroundColor: '#0b0f19', color: '#fff', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#38bdf8', margin: '0 0 10px 0' }}>AutoZ Access Hub</h1>
        <p style={{ color: '#94a3b8', fontSize: '1rem' }}>Get Direct API Keys to Integrate with n8n & Build AI Agents</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {categories.map((cat, i) => (
          <div key={i} style={{ backgroundColor: '#131c2e', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#f8fafc', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginTop: 0 }}>{cat.title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px', marginTop: '15px' }}>
              {cat.items.map((item, j) => (
                <div key={j} style={{ backgroundColor: '#1e293b', padding: '12px 15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 'bold' }}>{item.name}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0284c7', color: '#fff', padding: '6px 12px', borderRadius: '5px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    Get Key
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
