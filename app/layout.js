import { Inter } from "next/font/google";
import { AppProvider } from "./context/AppContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pinterest using NextJS",
  description: "woot woot!!",
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
