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
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Caveat:wght@500;600;700&display=swap" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
