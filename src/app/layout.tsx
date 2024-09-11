import type { Metadata } from "next";
import './globals.css';
import { Lato } from 'next/font/google';
import StoreProvider from "./StoreProvider";

const lato = Lato({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Task Manager",
  description: "Backend course assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lato.className}
      >
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};
