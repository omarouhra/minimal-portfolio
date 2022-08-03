import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Omar's Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-xl font-semibold '> Minimal Portfolio 🎉</h1>
    </div>
  );
};

export default Home;
