import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    <tr key={props.project.id}>
      <td>{props.project.id}</td>
      <td>{props.project.name}</td>
      <td>
        <button onClick={() => props.onDelete(props.project.id)}>Delete</button>
      </td>
      <td>
        <button onClick={() => props.onShow(true)}>Add</button>
      </td>
      <td>
        <Link to={`${props.project.id}/todo/`}>See ToDos</Link>
      </td>
    </tr>
  );
};

export default ProjectItem;
