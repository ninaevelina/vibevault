import type { Metadata } from "next";
import "../styles/_globals.scss";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import starIcon from "../public/small-star.svg";

export const metadata: Metadata = {
  title: "VibeVault",
  description: "Description",
  icons: [{ rel: "icon", url: starIcon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
