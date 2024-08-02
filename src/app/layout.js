import "./globals.css";
import "./fonts.css";
import { Poppins, Archivo } from "next/font/google";

const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Folio",
    description: "React, Next JS and TailWind Folio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
