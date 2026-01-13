import "./globals.css";
import { Provider } from "@/app/Provider";
import Navbar from "@/components/ui/Navbar";




export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          {children}
          
        </Provider>
        
      </body>
    </html>
  )
}