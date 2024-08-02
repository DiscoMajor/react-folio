import "./globals.css";

export const metadata = {
    title: "Folio",
    description: "React, Next JS and TailWind Folio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body>{children}</body>
        </html>
    );
}
