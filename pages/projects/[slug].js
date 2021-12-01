import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../support/context";
import { useRouter } from "next/dist/client/router";
import { RichText } from "prismic-reactjs";
import Header from "../../components/Header";
import Head from "next/head";
import CaseStudies from "../../components/CaseStudies";
import Image from "next/image";
import spinner from "../../public/icons/loader.svg";

const Project = () => {
  const [content, setContent] = useState(null);
  const route = useRouter();
  const ctx = useContext(UserContext);
  const { projects = [] } = ctx;

  useEffect(() => {
    if (projects?.length !== 0) {
      const prj = projects.find(
        (element) => element?.slugs?.[0] === route?.query?.slug
      );
      prj ? setContent(prj) : route.push("/not-found");
    }
    console.log(content?.data?.content);
  }, [route, projects]);

  return (
    <>
      <Head>
        <title>{`Powered by Pen — ${content?.data?.title?.[0]?.text}`}</title>
      </Head>
      <Header additionalClasses="bg-black" logoSize="small" showMenus={true} />
      <section className="p-4 flex flex-col space-y-6 items-center container mx-auto">
        {content?.data?.content ? (
          <RichText render={content?.data?.content} />
        ) : (
          <div className="w-full h-[40vh] flex items-center justify-center">
            <Image src={spinner} width={70} height={70} alt="loading..." />
          </div>
        )}
      </section>
      <div className="mt-20 bg-black">
        <CaseStudies title="Other Projects..." />
      </div>
    </>
  );
};

export default Project;
