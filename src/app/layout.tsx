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
  title: "[Your Name] | Web Developer Portfolio",
  description: "Personal web developer portfolio featuring modern projects and celestial sky themes.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-base-100 text-base-content antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
