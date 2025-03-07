import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="container px-4 py-8">{children}</section>
      </main>
      <Footer />
    </main>
  );
};

export default Layout;
