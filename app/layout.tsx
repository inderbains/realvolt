import './globals.css';

export const metadata = {
  title: 'RealVolt Brokerage OS',
  description: 'CRM, transactions, back office, trust accounting and brokerage operations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
