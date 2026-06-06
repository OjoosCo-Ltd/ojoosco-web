import Image from "next/image";

const socialLinks = [
  {
    label: "X",
    src: "/figma-assets/landing/icons/social-x.png",
    width: 20,
    height: 20,
  },
  {
    label: "Instagram",
    src: "/figma-assets/landing/icons/social-instagram.png",
    width: 24,
    height: 24,
  },
  {
    label: "TikTok",
    src: "/figma-assets/landing/icons/social-tiktok.png",
    width: 24,
    height: 24,
  },
  {
    label: "LinkedIn",
    src: "/figma-assets/landing/icons/social-linkedin.png",
    width: 24,
    height: 24,
  },
  {
    label: "Facebook",
    src: "/figma-assets/landing/icons/social-facebook.png",
    width: 24,
    height: 24,
  },
  {
    label: "Threads",
    src: "/figma-assets/landing/icons/social-threads.png",
    width: 24,
    height: 24,
  },
  {
    label: "YouTube",
    src: "/figma-assets/landing/icons/social-youtube.png",
    width: 24,
    height: 24,
  },
] as const;

export function FooterSocialLinks() {
  return (
    <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-4 pb-12">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href="#"
          aria-label={social.label}
          className="flex size-10 items-center justify-center rounded-full bg-[#005069]/[0.08] transition hover:bg-[#005069]/15"
        >
          <Image
            src={social.src}
            alt=""
            width={social.width}
            height={social.height}
            className="h-auto w-auto"
          />
        </a>
      ))}
    </div>
  );
}
