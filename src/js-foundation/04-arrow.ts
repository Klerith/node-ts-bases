interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  }
];


export const getUserById = ( id: number, callback: (err?:string, user?:User) => void ) => {

  const user = users.find( (user) => user.id === id );

  ( user )
    ? callback( undefined, user ) 
    : callback(`User not found with id ${id}`); 
}

