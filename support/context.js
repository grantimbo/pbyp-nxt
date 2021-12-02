import { getProjects, getPage } from "../support/prismic";
import { useState, useEffect, createContext } from "react";

export const UserContext = createContext([]);

const UserContextComponent = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [contents, setContents] = useState([]);

  const fetchProjects = async () => {
    const res = await getProjects("projects");
    const sortDate = res.results?.sort((a, b) => {
      let dateA = new Date(a.data.date),
        dateB = new Date(b.data.date);
      return dateB - dateA;
    });
    setProjects([sortDate]);
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
