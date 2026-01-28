import Layout from "@/components/Layout";
import { SidebarToggleProvider } from "@/context/SidebarToggleContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarToggleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidebarToggleProvider>
  );
}
