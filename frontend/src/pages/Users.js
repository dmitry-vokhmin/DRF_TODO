import UserList from "../components/users/UserList";

const UsersPage = (props) => {
  if (props.isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section className="center">
      <h1>All Users</h1>
      <UserList userList={props.userList} />
    </section>
  );
};

export default UsersPage;
