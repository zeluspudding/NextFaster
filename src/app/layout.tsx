import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { getAllCategories } from "@/db/utils";

const helvetica = localFont({
  src: "./fonts/HelveticaNeueLTPro-Md.woff",
  variable: "--font-helvetica",
});
const helveticaRoman = localFont({
  src: "./fonts/HelveticaNeueLTPro-Roman.woff",
  variable: "--font-helvetica-roman",
});

const futura = localFont({
  src: "./fonts/FuturaLTPro-BoldCond.woff2",
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allCategories = getAllCategories();
  return (
    <html lang="en" className="h-full">
      <body
        className={`${helvetica.variable} ${helveticaRoman.variable} ${futura.variable} flex min-h-full flex-col antialiased`}
      >
        <div className="flex flex-grow flex-col">
          <header className="font-futura flex items-center justify-between border-b-2 border-yellow-300 p-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-4xl font-bold text-green-800">
                NextMaster
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Search"
                  className="w-[450px] font-sans font-medium"
                />
                <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
              <Link
                href="/order"
                className="text-lg text-green-800 hover:underline"
              >
                ORDER
              </Link>
              <Link
                href="/order-history"
                className="text-lg text-green-800 hover:underline"
              >
                ORDER HISTORY
              </Link>
            </div>
          </header>
          <div className="flex flex-grow font-helvetica-roman">
            <aside className="hidden w-64 border-r border-gray-400 p-4 md:block">
              <h2 className="border-b border-green-800 text-sm font-semibold text-green-900">
                Choose a Category
              </h2>
              <ul className="">
                {allCategories.map((category) => (
                  <li
                    key={category.categoryName}
                    className="group pb-2 hover:bg-yellow-200"
                  >
                    <a
                      href={`/products/${category.categoryName}`}
                      className="text-xs text-gray-800 group-hover:underline"
                    >
                      {category.categoryName}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <main className="flex-grow">{children}</main>
          </div>
        </div>
        <footer className="flex h-6 items-center justify-between border-t border-gray-400 px-4 font-helvetica text-[11px]">
          <div className="space-x-1">
            <span className="hover:bg-yellow-100 hover:underline">Home</span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">
              Location
            </span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">Returns</span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">Careers</span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">
              Mobile App
            </span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">
              Solidworks Add-In
            </span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">Help</span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">
              Settings
            </span>
          </div>
          <div>
            By using this website, you agree to check out the{" "}
            <Link
              href="https://github.com/ethanniser/NextMaster"
              className="font-bold hover:underline"
            >
              Source Code
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
