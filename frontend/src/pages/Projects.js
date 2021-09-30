import { useParams } from "react-router-dom";
import ProjectsList from "../components/projects/ProjectsList";

const ProjectPage = (props) => {
  const { id } = useParams();

  const filteredProjects = props.projectList.filter((project) =>
    project.users.includes(parseInt(id))
  );

  if (props.isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section className="center">
      <h1>All Projects</h1>
      <ProjectsList projectList={filteredProjects} />
    </section>
  );
};

export default ProjectPage;
