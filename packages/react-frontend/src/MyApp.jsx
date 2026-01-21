import Table from "./Table";
import Form from "./Form";
import React, { useState, useEffect } from "react";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchUsers()
    .then((res) => res.json())
    .then((json) => setCharacters(json["users_list"]))
    .catch((error) => { console.log(error); });

  }, []);
  async function removeOneCharacter(id) {
    const response = await fetch(`http://localhost:8000/users/${id}`,{
      method: "DELETE",
    });
    if (response.status === 204){
      setCharacters((prev) => prev.filter((c) => c.id !== id));
    
    }
    
  }
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  );
  async function updateList(person) { 
    const response = await postUser(person);
    if (response.status === 201){
      const createdUser = await response.json();
      setCharacters((characters) => [...characters, createdUser]);
    }else{
      console.log(response.status)
    }

}
  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
  }
  function postUser(person) {
    const promise = fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    return promise;
  }
}
export default MyApp;
