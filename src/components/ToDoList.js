import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList({data}) {
  return (
    <div>
        <div>
            {
                data.map(row => <ToDoItem key={row.id} {...row}/>)
            }
        </div>
    </div>
  )
}
