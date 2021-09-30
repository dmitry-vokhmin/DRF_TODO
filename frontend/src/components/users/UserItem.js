import { Link } from "react-router-dom";

function UserItem(props) {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.username}</td>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>{props.user.email}</td>
      <td>
        <Link to={`projects/${props.user.id}`}>See projects</Link>
      </td>
    </tr>
  );
}

export default UserItem;
