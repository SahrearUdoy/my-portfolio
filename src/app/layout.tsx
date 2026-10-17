import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Udoy | Web Developer Portfolio",
  description: "Personal developer portfolio of Udoy — Web Developer crafting responsive, intuitive web experiences with Next.js, React, TypeScript, and celestial themes.",
};

const themeInitScript = `
(function() {
  try {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'ciel-day' || savedTheme === 'ciel-night') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = prefersDark ? 'ciel-night' : 'ciel-day';
      document.documentElement.setAttribute('data-theme', theme);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-transparent text-base-content antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
