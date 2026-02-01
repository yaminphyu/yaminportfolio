'use client'

import Layout from "@/components/Layout";
import { SidebarToggleProvider } from "@/context/SidebarToggleContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await new Promise((res) => setTimeout(res, 1200));
      setLoading(false);
    };

    init();
  }, []);

  if (loading) return <Loading />

  return (
    <SidebarToggleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidebarToggleProvider>
  );
}
