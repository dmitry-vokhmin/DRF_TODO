function UserItem(props) {
    return (
        <tr>
            <td>
                {props.user.id}
            </td>
            <td>
                {props.user.username}
            </td>
            <td>
                {props.user.first_name}
            </td>
            <td>
                {props.user.last_name}
            </td>
            <td>
                {props.user.email}
            </td>
        </tr>

    );
}

export default UserItem;