import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
