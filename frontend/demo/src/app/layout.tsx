import "./styles/bootstrap-rtl.min.css";
import "./styles/vendors.css";
import "./styles/aiz-core.css";
import "./styles/custom-style.css";

import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { Header } from "@/components/header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className="side-menu-closed">
          <div className="aiz-main-wrapper d-flex flex-column">
            <Navbar />

            <Header />

            {children}

            <Footer />
          </div>
        </body>
      </html>
  );
}
