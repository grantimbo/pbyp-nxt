import { getProjects } from "../support/prismic";
import { useState, useEffect, createContext } from "react";

export const UserContext = createContext([]);

const UserContextComponent = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await getProjects("projects");
    setProjects([res.results]);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <UserContext.Provider value={projects}>{children}</UserContext.Provider>
  );
};

export default UserContextComponent;
