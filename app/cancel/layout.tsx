// app/layout.tsx
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your App Description',
};

export default function checkoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
