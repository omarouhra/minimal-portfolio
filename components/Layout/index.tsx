import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gray-50/95 dark:bg-[#2A2A2A] transition duration-500 px-5">
      <div className='mx-auto max-w-4xl min-h-screen '>
        <Header />
        <main>{ children }</main>
        <Footer />
      </div>
    </section>
  );
}

export default Layout;
