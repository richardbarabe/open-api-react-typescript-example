import React, { useState, FunctionComponent } from 'react';
import {User} from '../generated/user-api/models/User';

type UserListProps = {
    users: User[]
}

const UserList: FunctionComponent<UserListProps> = ({users}) => {
     return (
        <ul>
            {users.map((user, index) => {
                return <li>{user.username}</li>
            })}
        </ul>
    );
}

export default UserList;