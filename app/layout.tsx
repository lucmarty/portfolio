import { cn } from "@/lib/utils";
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css"; 
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  variable: "--font-roboto",
  weight: '400',
  subsets: ['latin'],
})
// const geistSans = localFont({
//   src: "../public/assets/fonts/GeistMonoVF.woff",  
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const satoshi = localFont({
//   src: "../public/assets/fonts/Satoshi-regular.woff",  
//   variable: "--font-satoshi",
// });

// const satoshiBold = localFont({
//   src: "../public/assets/fonts/Satoshi-bold.woff",  
//   variable: "--font-satoshi-bold",
// });

// const acorn = {
//   variable: "--font-acorn",
// };

export const metadata: Metadata = {
  title: "Lucas Marty Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(roboto.className, "h-full")}>
      <body
        className={cn( 
          "bg-background text-foreground font-sans h-full",
          // geistSans.variable,
          // satoshi.variable,
          // satoshiBold.variable,
          
          roboto.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
