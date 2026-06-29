// Single source of truth for site navigation, footer, and social links.

export const navItems = [
  ["Home", "/"],
  ["About", "/about-us"],
  ["Ventures", "/ventures"],
  ["Investment", "/investment"],
  ["Contact", "/contact-us"],
] as const;

export const footerGroups = [
  {
    title: "Navigation",
    links: [
      ["Home", "/"],
      ["About", "/about-us"],
      ["Ventures", "/ventures"],
    ],
  },
  {
    title: "Connect",
    links: [
      ["Investment", "/investment"],
      ["Partner With Us", "/partner-with-us"],
      ["Contact", "/contact-us"],
      ["Explore Opportunities", "/explore-opportunities#opportunities"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy-policy"],
      ["Terms of Service", "/terms"],
    ],
  },
] as const;

export const socialLinks = [
  { label: "X", src: "/figma-assets/landing/icons/social-x.png", width: 20, height: 20 },
  { label: "Instagram", src: "/figma-assets/landing/icons/social-instagram.png", width: 24, height: 24 },
  { label: "TikTok", src: "/figma-assets/landing/icons/social-tiktok.png", width: 24, height: 24 },
  { label: "LinkedIn", src: "/figma-assets/landing/icons/social-linkedin.png", width: 24, height: 24 },
  { label: "Facebook", src: "/figma-assets/landing/icons/social-facebook.png", width: 24, height: 24 },
  { label: "Threads", src: "/figma-assets/landing/icons/social-threads.png", width: 24, height: 24 },
  { label: "YouTube", src: "/figma-assets/landing/icons/social-youtube.png", width: 24, height: 24 },
] as const;
