import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { siteConfig } from "@/config/site";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Chakra UI",
    "Framer Motion",
    "TypeScript",
  ],
  authors: [
    {
      name: "DC Lab",
    },
  ],
  creator: "Shagato Chowdhury",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={josefinSans.className}
        suppressHydrationWarning
      >
        <Provider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Provider>
      </body>
    </html>
  );
}
