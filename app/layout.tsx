import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Casa Lavínia",
    description: "Sabor Original Beef Jerky",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&display=swap" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
