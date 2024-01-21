const axios = require("axios");
const apiUrl = "http://localhost:3003/api/blogs";
const usersUrl = "http://localhost:3003/api/users";

// Blog DB testing

const blog = {
  title: "LOTR",
  author: "Tolkien",
  url: "Test.com",
  likes: 10,
  user: "65ada01c71f6a9d577490a9e",
};
/*
axios
  .post("http://localhost:3003/api/blogs", blog)
  .then((response) => {
    console.log("success!");
  })
  .catch((error) => console.log("error"));
 */
axios
  .get(apiUrl)
  .then((response) => {
    console.log("success", JSON.stringify(response.data, null, 2));
  })
  .catch((error) => console.log("error", error.response.data));
/*
axios
  .delete(`${apiUrl}/65a16e98418af474427f3b76`)
  .then((response) => {
    console.log("success", response.data);
  })
  .catch((error) => console.log("error", error.response.data));
  */

// Users DB testing
user = {
  username: "Yoyi28",
  password: "secret.19",
  name: "George",
  blogs: ["65a16e98418af474427f3b76"],
};
/*
axios
  .post(usersUrl, user)
  .then((response) => {
    console.log("success!");
  })
  .catch((error) => console.log("error"));

axios
  .get(usersUrl)
  .then((response) => {
    console.log("success!", JSON.stringify(response.data, null, 2));
  })
  .catch((error) => console.log("error"));
*/
