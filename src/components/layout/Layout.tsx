import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

function Layout({ children, backgroundImage }: LayoutProps) {
  return (
    <div
      className="flex flex-col min-h-screen text-white relative"
      style={
        backgroundImage
          ? {
              backgroundImage: backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0 pointer-events-none"></div>
      )}

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
