import { Noto_Sans_KR, Roboto_Mono } from "next/font/google";

//import { GeistSans } from "geist/font/sans";

// export const fontSans = IBM_Plex_Sans_KR({
//   subsets: ["latin", "latin-ext"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-sans",
// });

// export const fontSans = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-sans",
// });

export const fontSans = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const fontMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
