import UserItem from "./UserItem";

function UserList(props) {
    return (
        <table>
            <th>
                Id
            </th>
            <th>
                Username
            </th>
            <th>
                First Name
            </th>
            <th>
                Last Name
            </th>
            <th>
                Email
            </th>
            {props.userList.map((user) => <UserItem user={user}/>)}
        </table>

    );
}

export default UserList;