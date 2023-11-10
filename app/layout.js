import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/slick.css";
import "../styles/slick-theme.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
