import { Globe, Monitor, Smartphone, Apple, Laptop, Terminal } from "lucide-react";

export type Platform = {
  id: string;
  name: string;
  icon: typeof Globe;
  description: string;
  cta: string;
  href: string;
  recommended?: boolean;
  badge?: string;
};

export const platforms: Platform[] = [
   {
     id: "web",
     name: "Web",
     icon: Globe,
     description: "No installation. Start instantly in your browser.",
     cta: "Open Web App",
     href: "https://app.xplainfy.net",
     recommended: true,
     badge: "Start Instantly",
   },
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    description: "Native installer for Windows 10 and 11.",
    cta: "Download .exe",
    href: "#",
  },
  {
    id: "android",
    name: "Android",
    icon: Smartphone,
    description: "Get the Android app on Google Play.",
    cta: "Download APK",
    href: "#",
  },
  {
    id: "ios",
    name: "iOS",
    icon: Apple,
    description: "Optimized for iPhone and iPad.",
    cta: "App Store",
    href: "#",
  },
  {
    id: "macos",
    name: "macOS",
    icon: Laptop,
    description: "Universal build for Apple Silicon and Intel.",
    cta: "Download .dmg",
    href: "#",
  },
  {
    id: "linux",
    name: "Linux",
    icon: Terminal,
    description: "AppImage and .deb packages available.",
    cta: "Download",
    href: "#",
  },
];
