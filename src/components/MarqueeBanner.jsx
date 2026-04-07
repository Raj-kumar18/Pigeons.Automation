import React from 'react';

export default function MarqueeBanner() {
  const items = "Make ✦ Vapi ✦ WordPress ✦ Stripe ✦ OpenAI ✦ Zapier ✦ Twilio ✦ FastAPI ✦ React ✦ Node.js ✦ ";
  
  return (
    <div className="w-full bg-[#0a0a14] py-3 overflow-hidden border-y border-white/5 relative z-10 flex whitespace-nowrap">
      <div className="animate-marquee inline-block font-display text-[13px] text-textMuted uppercase tracking-[3px]">
        {items.repeat(5)}
      </div>
      <div className="animate-marquee inline-block font-display text-[13px] text-textMuted uppercase tracking-[3px] absolute top-1/2 -translate-y-1/2">
        {items.repeat(5)}
      </div>
    </div>
  );
}
