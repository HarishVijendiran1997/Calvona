import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calvona Gallery",
  description: "An online gallery for Calvona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
