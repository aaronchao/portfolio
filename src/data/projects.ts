export type Project = {
  slug: string;
  name: string;
  tagline: string;
  color: string;
  textColor: string;
  gap: string;
  built: string;
  highlights: { label: string; body: string }[];
  links: { live?: string; github?: string };
  year: string;
  /** Real product screenshot — public/screenshots/. Undefined means no
   *  visual asset exists anywhere (no live URL, nothing in the repo) —
   *  those tiles stay flat-colour with logotype, same as the reference
   *  site's non-photo tiles (e.g. "Los Colonos"), rather than faking one. */
  screenshot?: string;
};

/**
 * The six projects that are genuinely Aaron's own — RSSHub (a fork of
 * DIYgod's massive existing open-source project) was deliberately dropped
 * from an earlier candidate list, since presenting a self-hosted deploy of
 * someone else's project as "built" would be dishonest under this site's
 * whole premise.
 *
 * Backliner and LyricsOn are private repos — no `github` link for either,
 * since a private-repo link just 404s for a visitor.
 */
export const PROJECTS: Project[] = [
  {
    slug: "fliqpop",
    name: "Fliqpop",
    tagline: "Movie & series discovery that doesn't ignore Douban",
    color: "#e8503a",
    textColor: "#0b0b0e",
    gap:
      "Every movie discovery app treats IMDb and Rotten Tomatoes as the default and Douban — the actual opinion of a billion-plus-strong audience — as an afterthought, if it appears at all.",
    built:
      "A discovery wall that blends Douban, IMDb and Rotten Tomatoes as a weighted signal, not a naive average — Douban 8.0 means something different from IMDb 8.0, and averaging them raw would bury exactly the films this app exists to surface. A persistent, self-refreshing catalogue of 211,737 titles crawls and enriches itself on Vercel and Supabase's free tiers, entirely on a nightly cron. Buddy accounts let two people see the moment they've both said yes to the same thing.",
    highlights: [
      { label: "Blending", body: "Douban weighted highest, Rotten Tomatoes lowest — consensus and quality are different questions." },
      { label: "Scale", body: "A 211,737-title catalogue, built and kept fresh on free-tier infrastructure only." },
      { label: "Buddies", body: "Magic-link accounts, RLS-scoped collections, a match banner when two people both say yes." },
    ],
    links: { live: "https://fliqpop.vercel.app" },
    year: "2026",
    screenshot: "/screenshots/fliqpop.png",
  },
  {
    slug: "wavefm",
    name: "WaveFM",
    tagline: "Podcast discovery that explains itself",
    color: "#f2b705",
    textColor: "#0b0b0e",
    gap:
      "Podcast recommendations are black boxes — an endless feed with no reason attached — and every discovery app locks you into its own player, when the show you want to hear about might live on a different app entirely.",
    built:
      "A free, browser-based discovery engine where every recommendation carries an explicit \"why\" — a cluster reason, a rating, a show you already liked — instead of a flat ranked list. Wavr hands you off to whatever app you actually listen in rather than building a competing player nobody asked for. Built entirely inside Vercel's Hobby tier and Supabase's free tier, with cross-device sync via magic-link auth.",
    highlights: [
      { label: "Explainable", body: "Every suggestion carries a stated reason, not just a score." },
      { label: "Deep-link out", body: "Recommends, then hands off to Apple Podcasts, Spotify, YouTube Music — no in-app player." },
      { label: "Zero-cost", body: "Free podcast APIs proxied through the app's own routes; no paid key anywhere in the stack." },
    ],
    links: { live: "https://wavefm.vercel.app", github: "https://github.com/aaronchao/wavefm" },
    year: "2026",
    screenshot: "/screenshots/wavefm.jpg",
  },
  {
    slug: "ptvon",
    name: "PTVon",
    tagline: "Live Melbourne transit, with no API key inside the app",
    color: "#152c6b",
    textColor: "#f2f0ea",
    gap:
      "Melbourne's official transit app buries live departures behind several taps, and the PTV Timetable API requires a signed, keyed request — a key that can't safely ship inside a public app without anyone who decompiles it walking off with it.",
    built:
      "A hyper-glanceable departures app — pin your stops, get live countdowns, track one stop for exact 10/5/1-minute alerts with an ongoing Lock Screen countdown and Dynamic Island — built keyless. A Cloudflare Worker holds the real PTV credentials, signs every request server-side, and fronts the same API paths the app already expects, so the published build embeds no secret at all. An Apple Watch companion mirrors the stop list over WatchConnectivity.",
    highlights: [
      { label: "Keyless", body: "A signing proxy on Cloudflare Workers — zero PTV credentials in the shipped app." },
      { label: "Live Activity", body: "Lock Screen countdown + Dynamic Island, driven by exact AlarmManager/BGTask scheduling." },
      { label: "Watch companion", body: "Stop list mirrored to a native watchOS app over WatchConnectivity." },
    ],
    links: { github: "https://github.com/aaronchao/PTVon" },
    year: "2026",
    screenshot: "/screenshots/ptvon.png",
  },
  {
    slug: "backliner",
    name: "Backliner",
    tagline: "Your Spotify library, sorted by who actually made it",
    color: "#1a1a1a",
    textColor: "#f2f0ea",
    gap:
      "Spotify's Web API has no producer, writer or engineer credits anywhere — not on any endpoint, not on any tier. The credits shown in Spotify's own mobile app come from a private internal endpoint that isn't licensed for third-party use.",
    built:
      "An ISRC-keyed enrichment cascade — the one exact-match primary key Spotify's public API does give you — that races Genius and Discogs concurrently for every track, falling back to MusicBrainz only where the fast sources are weakest (pre-2000 releases, or tracks with no known year). The result re-sorts an entire library around the people who made the records, and turns each credited person into a pivot into everything else they touched.",
    highlights: [
      { label: "ISRC-keyed", body: "Exact-match lookups, not fuzzy title/artist matching." },
      { label: "Gated cascade", body: "MusicBrainz called only when it's actually needed — it hard-limits to 1 req/sec." },
      { label: "Pivot browsing", body: "Every credited person becomes a lens into the rest of their catalogue." },
    ],
    links: { live: "https://visible-planner-endpoint.ngrok-free.dev" },
    year: "2026",
    screenshot: "/screenshots/backliner.png",
  },
  {
    slug: "lyricson",
    name: "LyricsOn",
    tagline: "Lyrics on screen in under 3 seconds, from a cold tap",
    color: "#c9184a",
    textColor: "#f2f0ea",
    gap:
      "Every lyrics app makes you search — type the song, wait, scroll. None render from a cold tap on whatever's already playing in under three seconds.",
    built:
      "A notification-listener service keeps the current track's title, artist and album art warm in memory before the app is even opened, so the cover paints on the first frame with zero network calls. Lyrics resolve via a two-tier parallel race — synced sources (LRCLIB, Netease, QQ Music) first, plain-text sources second — with a hidden WebView as the last resort: a real Chrome engine on the device's residential IP, so it clears the Cloudflare challenges and site blocks that kill every API-only scraper.",
    highlights: [
      { label: "Cold start", body: "Notification-listener keeps now-playing metadata warm; no polling, no network for the cover art." },
      { label: "Parallel race", body: "Multiple lyric sources fired concurrently — first non-empty hit wins, the rest cancel." },
      { label: "WebView fallback", body: "A real browser engine on-device reaches the long tail nothing else can." },
    ],
    links: {},
    year: "2026",
    screenshot: "/screenshots/lyricson.png",
  },
  {
    slug: "youtubify",
    name: "youtubify",
    tagline: "Spotify → YouTube, with zero fallback substitutions",
    color: "#2b2d42",
    textColor: "#f2f0ea",
    gap:
      "Every \"Spotify to YouTube\" tool just grabs the first search result — lyric videos, fan reuploads, sped-up edits and auto-generated \"Topic\" audio channels end up sitting in a playlist next to real music videos.",
    built:
      "A three-tier official-channel allowlist — the artist's own channel, then approved live-performance channels, then approved curated aggregators — checked by channel ID, never by name, since names are trivially spoofable. If nothing in any tier qualifies, the track is skipped and logged rather than silently backfilled with whatever ranked first. Idempotent and crash-safe: interrupt it anytime, including at YouTube's daily quota limit, and the next run resumes exactly where it stopped.",
    highlights: [
      { label: "ID allowlist", body: "Channels approved by ID, never by name — names can be spoofed, IDs can't." },
      { label: "Skip, don't substitute", body: "No qualifying video means the track is logged and skipped, never backfilled." },
      { label: "Resumable", body: "Crash-safe and idempotent — picks up exactly where it stopped, even across quota resets." },
    ],
    links: { github: "https://github.com/aaronchao/youtubify" },
    year: "2026",
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
