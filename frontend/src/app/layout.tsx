import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Drawer from "@/components/DrawerMenu";
import NavbarMenuDrawer from "@/components/NavbarMenuDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geek Book Store",
  description: "We provide many books in tech category for geeks",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
          <Header/>
          <main className="mx-auto h-full" style={{maxWidth: '900px'}}>{children}</main>
          <Footer />
          <Drawer>
            <NavbarMenuDrawer />
          </Drawer>
        </div>
      </body>
    </html>
  );
}
