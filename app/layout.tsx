import "./globals.css";

export const metadata = {
  title: "RealVolt — Real Estate Operating System",
  description: "CRM, transactions, property marketing and brokerage back office in one platform."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
