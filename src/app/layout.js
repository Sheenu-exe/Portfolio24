
import "./globals.css";


export const metadata = {
  title: "Portfolio | Sachin Parihar",
  description: "This  Sachin Parihar's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body>{children}</body>
    </html>
  );
}
