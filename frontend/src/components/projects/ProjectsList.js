import ProjectItem from "./ProjectItem";

const ProjectsList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Project name</th>
          <th>ToDos</th>
        </tr>
      </thead>
      <tbody>
        {props.projectList.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsList;
