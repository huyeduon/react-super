import { useEffect, useState } from "react";
import axios from "axios";

import BareInput from "./components/BareInput";
import Layout from "./components/Layout";
import BareButton from "./components/BareButton";
import LoginControl from "./components/LoginControl";

function App() {
  // const baseUrl = "https://reqres.in/api";
  // const [users, setUsers] = useState([]);

  // const getUsers = () => {
  //   return axios
  //     .get(`${baseUrl}/users`)
  //     .then((response) => {
  //       setUsers(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users:", error);
  //     });
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <>
      <LoginControl isLoggedIn={false} />
      <Layout>
        <h1>Hello this is Layout</h1>
      </Layout>
      <BareInput type='typeInput' value='100' autoFocus onChange={() => {}} />
      <BareButton />
      {/* 
      <h1>List of Users</h1>
      {users.map((user) => (
        <p key={user.id}>{user.email}</p>
      ))} */}
    </>
  );
}

export default App;
