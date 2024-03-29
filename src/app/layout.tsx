import type { Metadata } from 'next';
import { Footer, Header } from '../components/layout';
import './globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import lightPalette from '../theme/lightTheme';
export const metadata: Metadata = {
  title: 'Pets Care',
  description: 'Generated by create next app',
};

// const lightTheme = createTheme(lightPalette);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={lightPalette}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
