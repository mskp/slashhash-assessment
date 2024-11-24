import { Inter } from "next/font/google";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" href="/">
              University Search
            </Link>
            <div className="navbar-nav">
              <Link className="nav-link" href="/">
                Search
              </Link>
              <Link className="nav-link" href="/favorites">
                Favorites
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
