import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Locale } from "@/config/localeConfig";
import { getDictionary, Layout, Module } from "@/utils/getDictionaries";
import { ReactLenis } from "lenis/react";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;

  const dict = getDictionary(lang, Module.LAYOUT) as Layout;
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body>
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.4,
          }}
        >
          <Header />
          <div className="overflow-hidden">{children}</div>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ReactLenis>
      </body>
    </html>
  );
}
