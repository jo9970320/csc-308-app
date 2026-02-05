import express from "express";
import cors from "cors";
import userService from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("OK"));

app.get("/users", (req, res) => {
  const { name, job } = req.query;

  userService
    .getUsers(name, job)
    .then((users) => res.send({ users_list: users }))
    .catch((err) => res.status(500).send(err.message));
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  userService
    .findUserById(id)
    .then((user) => {
      if (!user) return res.status(404).send("Resource not found.");
      res.send(user);
    })
    .catch((err) => res.status(400).send(err.message));
});

app.post("/users", (req, res) => {
  userService
    .addUser(req.body)
    .then((newUser) => res.status(201).send(newUser))
    .catch((err) => res.status(400).send(err.message));
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  userService
    .deleteUserById(id)
    .then((deleted) => {
      if (!deleted) return res.status(404).send("Resource not found");
      res.status(204).send();
    })
    .catch((err) => res.status(400).send(err.message));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});









// const users = {
//   users_list: [
//     {
//       id: "xyz789",
//       name: "Charlie",
//       job: "Janitor"
//     },
//     {
//       id: "abc123",
//       name: "Mac",
//       job: "Bouncer"
//     },
//     {
//       id: "ppp222",
//       name: "Mac",
//       job: "Professor"
//     },
//     {
//       id: "yat999",
//       name: "Dee",
//       job: "Aspring actress"
//     },
//     {
//       id: "zap555",
//       name: "Dennis",
//       job: "Bartender"
//     },
//     {
//       "id": "qwe123",
//       "job": "Zookeeper",
//       "name": "Cindy"
//     }
    
//   ]
// };
// app.use(cors());
// app.use(express.json());

// const findUserByName = (name) => {
//   return users["users_list"].filter(
//     (user) => user["name"] === name
//   );
// };
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/users", (req, res) => {
//   const name = req.query.name;
//   if (name != undefined) {
//     let result = findUserByName(name);
//     result = { users_list: result };
//     res.send(result);
//   } else {
//     res.send(users);
//   }
// });

// const findUserById = (id) =>
//   users["users_list"].find((user) => user["id"] === id);

// app.get("/users/:id", (req, res) => {
//   const id = req.params["id"]; //or req.params.id
//   let result = findUserById(id);
//   if (result === undefined) {
//     res.status(404).send("Resource not found.");
//   } else {
//     res.send(result);
//   }
// });

// const deleteUserbyId = (id) =>{
//   const index = users.users_list.findIndex(
//     (user) => user.id === id
//   );

//   if (index === -1){
//     return false;
//   }
//   users.users_list.splice(index,1);
//   return true;

// }
  

// const addUser = (user) => {
//   users["users_list"].push(user);
//   return user;
// };

// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const deleteUser = deleteUserbyId(id);
//   if (deleteUser){
//     res.status(204).send()
//   }
//   else{
//     res.status(404).send("Resource not found")
//   }
// });


// app.post("/users", (req, res) => {
//   const userToAdd = {
//     id: randomidgenerator(),
//     ...req.body
//   };
//   let result = addUser(userToAdd);
//   if (result){
//     res.status(201).send(userToAdd)
//   }
// });
// function randomidgenerator(){
//   return Date.now().toString();
// }