import "./globals.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}