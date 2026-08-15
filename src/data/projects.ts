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
  /** Mobile shots render inside a phone bezel, object-contain, on the
   *  tile's own colour — a portrait screenshot force-cropped into a
   *  landscape tile is what made this look messy in the first place. */
  screenshotType?: "web" | "mobile";
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
    tagline: "The world's opinion, not just Hollywood's",
    color: "#e8503a",
    textColor: "#0b0b0e",
    gap:
      "Every discovery app treats IMDb and Rotten Tomatoes as gospel — and Douban, a billion-plus opinions strong, as a footnote, if it shows up at all.",
    built:
      "A discovery wall that weighs Douban, IMDb and Rotten Tomatoes properly — never averaged, never flattened. Douban 8.0 and IMDb 8.0 aren't the same claim, and treating them as interchangeable buries exactly the films worth surfacing. A self-refreshing catalogue of 211,737 titles maintains itself, nightly, on infrastructure that costs nothing. Buddy accounts surface the moment two people both say yes.",
    highlights: [
      { label: "Blending", body: "Douban leads, Rotten Tomatoes follows — consensus and quality were never the same question." },
      { label: "Scale", body: "211,737 titles, kept fresh forever, on zero paid infrastructure." },
      { label: "Buddies", body: "Magic-link accounts, a match banner the second two people agree." },
    ],
    links: { live: "https://fliqpop.vercel.app" },
    year: "2026",
    screenshot: "/screenshots/fliqpop.png",
    screenshotType: "web",
  },
  {
    slug: "wavefm",
    name: "WaveFM",
    tagline: "Discovery that tells you why",
    color: "#f2b705",
    textColor: "#0b0b0e",
    gap:
      "Every podcast app hands you a black-box feed, then locks you into its own player — as if the show you want to hear about could only live in one app.",
    built:
      "Every recommendation on WaveFM states its case — a cluster, a rating, a show you already loved — instead of a flat ranked list pretending to know best. It hands you off to whatever app you actually listen in and builds no competing player nobody asked for. Free to build, free to run, synced across every device you own.",
    highlights: [
      { label: "Explainable", body: "Every suggestion states its case. No black box, ever." },
      { label: "Deep-link out", body: "Recommends, then hands off — no in-app player standing between you and the show." },
      { label: "Zero-cost", body: "Free APIs, proxied and cached. No key, no bill, no compromise." },
    ],
    links: { live: "https://wavefm.vercel.app", github: "https://github.com/aaronchao/wavefm" },
    year: "2026",
    screenshot: "/screenshots/wavefm.png",
    screenshotType: "web",
  },
  {
    slug: "ptvon",
    name: "PTVon",
    tagline: "Live transit. Zero embedded secrets.",
    color: "#152c6b",
    textColor: "#f2f0ea",
    gap:
      "Melbourne's own transit app buries live departures behind five taps — and the PTV API demands a signed key that no app people can decompile should ever ship with.",
    built:
      "A glanceable departures app, built keyless from the ground up: a Cloudflare Worker signs every request server-side, so the published build carries nothing worth stealing. Lock Screen countdowns, Dynamic Island, a native Watch companion — all live, all exact to the minute.",
    highlights: [
      { label: "Keyless", body: "A signing proxy on Cloudflare Workers — zero credentials shipped, zero credentials to steal." },
      { label: "Live Activity", body: "Lock Screen countdown, Dynamic Island, exact to the second." },
      { label: "Watch companion", body: "A native watchOS app, synced live over WatchConnectivity." },
    ],
    links: { github: "https://github.com/aaronchao/PTVon" },
    year: "2026",
    screenshot: "/screenshots/ptvon.png",
    screenshotType: "mobile",
  },
  {
    slug: "backliner",
    name: "Backliner",
    tagline: "Your library, sorted by who actually made it",
    color: "#1a1a1a",
    textColor: "#f2f0ea",
    gap:
      "Spotify's API carries no producer credits — not on any tier, not for any price. The real ones sit behind a private endpoint nobody outside Spotify is licensed to touch.",
    built:
      "An ISRC-keyed cascade races Genius and Discogs concurrently for every track, calling on MusicBrainz only where the fast sources are weakest. The result is a library re-sorted around the people who actually made it — every credit a door into everything else they touched.",
    highlights: [
      { label: "ISRC-keyed", body: "Exact-match lookups — never a fuzzy guess at title or artist." },
      { label: "Gated cascade", body: "MusicBrainz called only when it earns its 1-request-per-second cost." },
      { label: "Pivot browsing", body: "Every credited name becomes a way into the rest of their catalogue." },
    ],
    links: { live: "https://visible-planner-endpoint.ngrok-free.dev" },
    year: "2026",
    screenshot: "/screenshots/backliner.png",
    screenshotType: "web",
  },
  {
    slug: "lyricson",
    name: "LyricsOn",
    tagline: "On screen before you'd finish typing a search",
    color: "#c9184a",
    textColor: "#f2f0ea",
    gap:
      "Every lyrics app makes you search first — type the title, wait, scroll. None render from a cold tap on whatever's already playing in under three seconds.",
    built:
      "The now-playing track sits warm in memory before the app even opens, so the cover paints instantly, no network required. Lyrics arrive through a parallel race across three sources at once, with a hidden browser engine as the last resort — real enough to clear every block that kills a plain scraper.",
    highlights: [
      { label: "Cold start", body: "Metadata warm before launch — zero network just to paint the cover." },
      { label: "Parallel race", body: "Every source fires at once. First real hit wins, the rest fall away." },
      { label: "WebView fallback", body: "A genuine browser, on-device — reaches what nothing else can." },
    ],
    links: {},
    year: "2026",
    screenshot: "/screenshots/lyricson.png",
    screenshotType: "mobile",
  },
  {
    slug: "youtubify",
    name: "youtubify",
    tagline: "Only the real video. Never a substitute.",
    color: "#2b2d42",
    textColor: "#f2f0ea",
    gap:
      "Every Spotify-to-YouTube tool grabs the first search result — lyric videos, fan reuploads, sped-up edits, sitting beside the real thing as if it doesn't matter.",
    built:
      "A three-tier channel allowlist, checked by ID — never by name, since names lie and IDs can't. Nothing qualifies, the track is skipped and logged, never silently swapped for whatever ranked first. Crash-safe and idempotent: interrupted anywhere, it resumes exactly where it stopped.",
    highlights: [
      { label: "ID allowlist", body: "Channels approved by ID, never by name — names can be spoofed." },
      { label: "Skip, don't substitute", body: "No qualifying match means no track. Never a stand-in." },
      { label: "Resumable", body: "Crash-safe and idempotent — resumes exactly where it stopped, every time." },
    ],
    links: { github: "https://github.com/aaronchao/youtubify" },
    year: "2026",
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
