import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [mode, setMode] = useState('online');

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((res) => {
        res.json()
          .then((result) => {
            setUsersData(result);
            localStorage.setItem('users', JSON.stringify(result));
          })
      })
      .catch(() => {
        setMode('offline');
        const usersCollection = localStorage.getItem('users');
        setUsersData(JSON.parse(usersCollection));
      });
  }, [])

  return (
    <div>
      {
        mode === 'offline' &&
        <Alert variant="warning">
          You're currentyl in the offline mode!
        </Alert>
      }
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
    </div>

  );
};

export default Users;
