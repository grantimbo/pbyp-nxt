import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../support/context";
import { useRouter } from "next/dist/client/router";
import { RichText } from "prismic-reactjs";
import Header from "../../components/Header";
import Head from "next/head";

const Project = () => {
  const [projects = [], setProjects] = useContext(UserContext);
  const [content, setContent] = useState(null);
  const route = useRouter();

  useEffect(() => {
    if (projects.length !== 0) {
      const prj = projects.find(
        (element) => element?.slugs?.[0] === route?.query?.slug
      );
      prj ? setContent(prj) : route.push("/not-found");
    }
  }, [projects]);

  return (
    <>
      <Head>
        <title>{`Powered by Pen — ${content?.data?.title?.[0]?.text}`}</title>
      </Head>
      <Header additionalClasses="" logoSize="small" showMenus={true} />
      <section className="p-4 flex flex-col space-y-6 items-center">
        <RichText render={content?.data?.content} />
      </section>
    </>
  );
};

export default Project;
