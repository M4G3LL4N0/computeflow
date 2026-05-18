import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "ComputeFlow — The Operating System for Global Compute",
  description:
    "Route AI workloads across cloud, private, edge, sovereign, and future orbital compute infrastructure.",
  metadataBase: new URL("https://computeflow.app"),
  openGraph: {
    title: "ComputeFlow — The Operating System for Global Compute",
    description:
      "Route AI workloads across cloud, private, edge, sovereign, and future orbital compute infrastructure.",
    url: "https://computeflow.app",
    siteName: "ComputeFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ComputeFlow — The Operating System for Global Compute",
    description:
      "Route AI workloads across cloud, private, edge, sovereign, and future orbital compute infrastructure.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#04060d] text-white antialiased">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
