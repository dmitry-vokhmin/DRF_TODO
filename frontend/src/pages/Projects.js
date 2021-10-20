import { useParams } from "react-router-dom";
import ProjectsList from "../components/projects/ProjectsList";
import { useEffect, useState } from "react";
import CreateForm from "../components/Forms/CreateForm";
import Search from "../components/Forms/Search";

const ProjectPage = (props) => {
  const [projects, setProject] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const filteredProjects = props.projectList.filter((project) =>
      project.users.includes(parseInt(id))
    );
    setProject(filteredProjects);
    setFilteredProjects(filteredProjects);
  }, [props.projectList, id]);

  const header = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token"),
  };

  const onDeleteHandler = (id) => {
    fetch(`http://127.0.0.1:8000/api/projects/${id}`, {
      method: "DELETE",
      headers: header,
    }).then((response) => {
      const removeProject = projects.filter((project) => project.id !== id);
      setProject(removeProject);
    });
  };

  const onAddTodoHandler = (data) => {
    const newData = {
      url: '',
      name: data,
    };

    fetch(`http://127.0.0.1:8000/api/projects/`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(newData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProject((prevState) => [...prevState, data]);
      });
  };

  if (props.isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section className="center">
      <h1>All Projects</h1>
      <h2>Search</h2>
      <Search projects={projects} onSearch={setFilteredProjects}/>
      <ProjectsList projectList={filteredProjects} onDelete={onDeleteHandler} onShowForm={setShowProjectForm}/>
      {showProjectForm && <CreateForm onCreate={onAddTodoHandler}/>}
    </section>
  );
};

export default ProjectPage;
