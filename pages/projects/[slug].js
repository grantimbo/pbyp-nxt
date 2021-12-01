import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../support/context";
import { useRouter } from "next/dist/client/router";
import { RichText } from "prismic-reactjs";

const Project = () => {
  const [projects = [], setProjects] = useContext(UserContext);
  const [content, setContent] = useState(null);
  const route = useRouter();

  useEffect(() => {
    if (projects.length !== 0) {
      const prj = projects.find(
        (element) => element?.slugs?.[0] === route?.query?.slug
      );
      prj ? setContent(prj) : route.push("/notfound");
    }
  }, [projects]);

  return (
    <>
      <h1>h3ll-</h1>
      <RichText render={content?.data?.content} />
    </>
  );
};

export default Project;
