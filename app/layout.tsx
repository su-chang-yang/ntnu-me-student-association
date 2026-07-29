import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://su-chang-yang.github.io/ntnu-me-student-association/"),
  title: { default: "師大機電系學會", template: "%s｜師大機電系學會" },
  description: "國立臺灣師範大學機電工程學系系學會——活動、成員、學生資源與系學會資訊。",
  openGraph: { title: "師大機電系學會", description: "NTNU ME Student Association", images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
