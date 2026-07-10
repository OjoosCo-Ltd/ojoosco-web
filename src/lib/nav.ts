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
  { label: "X", href: "https://x.com/OjoosCo", src: "/figma-assets/landing/icons/social-x.png", width: 20, height: 20 },
  { label: "Instagram", href: "https://www.instagram.com/ojoosco?igsh=MXUyemo0MmsxMm1ibA%3D%3D&utm_source=qr", src: "/figma-assets/landing/icons/social-instagram.png", width: 24, height: 24 },
  { label: "TikTok", href: "https://www.tiktok.com/@ojoosco?_r=1&_t=ZN-972x6QbZBWo", src: "/figma-assets/landing/icons/social-tiktok.png", width: 24, height: 24 },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ojooscoltd/", src: "/figma-assets/landing/icons/social-linkedin.png", width: 24, height: 24 },
  { label: "Facebook", href: "https://www.facebook.com/share/1EJfjttgJH/?mibextid=wwXIfr", src: "/figma-assets/landing/icons/social-facebook.png", width: 24, height: 24 },
  { label: "Threads", href: "https://www.threads.com/@ojoosco?igshid=NTc4MTIwNjQ2YQ==", src: "/figma-assets/landing/icons/social-threads.png", width: 24, height: 24 },
  { label: "YouTube", href: "https://youtube.com/@ojoosco?si=1BF6EmhmHyiAfLFz", src: "/figma-assets/landing/icons/social-youtube.png", width: 24, height: 24 },
] as const;
