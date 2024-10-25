import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { Poppins } from "next/font/google";
interface LayoutProps {
  children: ReactNode;
}
const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={poppins.className}>
      <section className="layout padding-off-box">
        <Navbar />
        <Header />
      </section>
      <section className="main-content">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
