import UserItem from "./UserItem";

function UserList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Projects</th>
        </tr>
      </thead>
      <tbody>
        {props.userList.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
