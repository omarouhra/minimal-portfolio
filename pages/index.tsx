import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/core/Button";
import HeroPic from "../components/core/HeroPic";
import Title from "../components/core/Title";
import HeadingWithText from "../components/HeadingWithText";

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Omar's Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>

        {/* Hero Section */ }
        <section className="py-12">
          <HeroPic />
          <HeadingWithText title="Hi! I’m Omar," style="gradient" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." label="Take me to the magic land" />
        </section>

        {/*  Projects Section */ }
        <section className="py-12">
          <Title title="Selected projects" style="gradient" />
          <div className="space-y-12 mb-12">
            {/* Project 1 */ }
            <div className="flex flex-col space-y-8 mt-4 md:flex-row-reverse md:justify-between md:items-center md:space-y-0">
              <div className="w-full h-[250px] md:w-[350px] md:h-[180px] bg-gray-100 rounded-md shadow-lg md:ml-12"></div>
              <div>
                <span className="text-sm text-gray-400 font-light ">
                  2019 - present
                </span>
                <HeadingWithText title="This is a project name! Name wisely!" text="Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline." label="Try it out" />
              </div>
            </div>
            {/* Project 2 */ }
            <div className="flex flex-col space-y-8 mt-4 md:flex-row-reverse md:justify-between md:items-center md:space-y-0">
              <div className="w-full h-[250px] md:w-[350px] md:h-[180px] bg-gray-100 rounded-md shadow-lg md:ml-12"></div>
              <div>
                <span className="text-sm text-gray-400 font-light ">
                  2019 - present
                </span>
                <HeadingWithText title="This is a project name! Name wisely!" text="Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline." label="Try it out" />
              </div>
            </div>
            {/* Project 3 */ }
            <div className="flex flex-col space-y-8 mt-4 md:flex-row-reverse md:justify-between md:items-center md:space-y-0">
              <div className="w-full h-[250px] md:w-[350px] md:h-[180px] bg-gray-100 rounded-md shadow-lg md:ml-12"></div>
              <div>
                <span className="text-sm text-gray-400 font-light ">
                  2019 - present
                </span>
                <HeadingWithText title="This is a project name! Name wisely!" text="Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline." label="Try it out" />
              </div>
            </div>
          </div>
          <Button lable="View all projects →" />
        </section>

        {/* Articles Section */ }
        <section className="py-12">
          <Title title="Articles" style="gradient" />

          <div className="space-y-12 mb-12">
            <div>
              <span className="text-sm text-gray-400 font-light ">
                2019 - present
              </span>
              <HeadingWithText title="This is an article title" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." label="Read More" />
            </div>
            <div>
              <span className="text-sm text-gray-400 font-light ">
                2019 - present
              </span>
              <HeadingWithText title="This is an article title" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." label="Read More" />
            </div>
            <div>
              <span className="text-sm text-gray-400 font-light ">
                2019 - present
              </span>
              <HeadingWithText title="This is an article title" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." label="Read More" />
            </div>

          </div>

          <Button lable="View all articles →" />

        </section>
      </main>
    </div>
  );
};

export default Home;
