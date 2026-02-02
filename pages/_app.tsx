'use client'

import Layout from "@/components/Layout";
import { SidebarToggleProvider } from "@/context/SidebarToggleContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await new Promise((res) => setTimeout(res, 1200));
      setLoading(false);
    };

    init();
  }, []);

  if (loading) return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <Loading />
    </ThemeProvider>
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <SidebarToggleProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarToggleProvider>
    </ThemeProvider>
  );
}
