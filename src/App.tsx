import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './users/UserList';

import { User } from './generated/user-api/models/User';
import { DefaultApi }  from './generated/user-api/apis/DefaultApi';

import UserApiConfiguration from './UserApiConfiguration';

const userApi:DefaultApi = new DefaultApi(UserApiConfiguration);

async function fetchUsers(): Promise<Array<User>> {
  return await userApi.getusers();
}

const App: React.FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  let handleClick = async () => {
    let users = await fetchUsers(); 
    setUsers(users);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          type="button"
          onClick={handleClick}>
          Clique icitte !!!
        </button>
        (pour voir les users)

        { users.length > 0 &&
          <UserList users={users}/>
        }


      </header>
    </div>
  );
}

export default App;
