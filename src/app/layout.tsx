import { Inter } from "next/font/google";
import "@/style/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UTA SAMG",
  description: "Implantée dans les Ardennes depuis plus de trois décennies, notre entreprise spécialisée dans la sous-traitance en mécanique générale et l'usinage en commande numérique se distingue par son expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="./icon.png" />
      </head>

      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-TVT544NDVE" />
    </html>
  );
}
