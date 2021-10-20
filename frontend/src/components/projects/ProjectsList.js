import ProjectItem from "./ProjectItem";

const ProjectsList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Project name</th>
          <th>ToDos</th>
          <th>Delete</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        {props.projectList.map((project) => (
          <ProjectItem key={project.id} project={project} onDelete={props.onDelete} onShow={props.onShowForm}/>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsList;
