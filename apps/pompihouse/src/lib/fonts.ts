import { Lora, Nunito_Sans, Caveat } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["600", "700"],
});
