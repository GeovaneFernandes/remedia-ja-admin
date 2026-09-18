import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Remedia Já — Painel Admin',
  description: 'Painel administrativo de uso do Remedia Já',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
