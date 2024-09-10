import { Inter } from "next/font/google";
import "@/style/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" />
      </head>

      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-TVT544NDVE" />
    </html>
  );
}
