import { getProjects, getPage } from "../support/prismic";
import { useState, useEffect, createContext } from "react";

export const UserContext = createContext([]);

const UserContextComponent = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [contents, setContents] = useState([]);

  const fetchProjects = async () => {
    const res = await getProjects("projects");
    setProjects([res.results]);
  };

  const fetchContent = async () => {
    const res = await getPage("YNX4NBIAACoATUBy");
    setContents(Object.assign({}, [res?.results?.[0]?.data]));
  };

  useEffect(() => {
    fetchProjects();
    fetchContent();
  }, []);

  return (
    <UserContext.Provider
      value={{
        projects: projects[0],
        contents: contents[0],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextComponent;
