import React from 'react';
import {Table, TableRow} from ".."

export default {
  title: 'Example/Button',
};


interface ItemType { 
  user: string;
  age: number;
}
const data : ItemType[] = [
  {
    user : "mark",
    age : 34
  },
  {
    user : "dev",
    age : 19
  },
]

export const Default = () => {
  return(
    <Table data={data}>
      <TableRow rowId="user" />
      <TableRow rowId="age" />
      <TableRow 
        renderHeader={({ item }) => {
          return <i>total items {item?.length}</i>
        }} 
        renderCell={() => {
          return <button>delete</button>
        }}
      />
    </Table>
  )
}