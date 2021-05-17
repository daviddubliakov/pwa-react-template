import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((res) => {
        res.json()
          .then((result) => {
            setUsersData(result);
          })
      });


  }, [])

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
