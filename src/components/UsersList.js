import React from 'react'
import { users } from './data/users'
import User from './User';

export default function UsersList() {
    console.log(users);
  return (
    <div>
        {
        users.map(elem => <User key={elem.id} {...elem}/>)
        }        
    </div>
  )
}
