import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./context/AppContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pinterest using NextJS",
  description: "woot woot!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
