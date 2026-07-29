import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "師大機電系學會｜NTNU ME SA",
  description: "國立臺灣師範大學機電工程學系系學會——活動、資源與每一位機電人的共同基地。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
