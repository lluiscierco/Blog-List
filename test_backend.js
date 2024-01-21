const axios = require("axios");
const apiUrl = "http://localhost:3003/api/blogs";
/*
const blog = {
  title: "LOTR",
  author: "Tolkien",
  url: "Test.com",
  likes: 10,
};

axios
  .post("http://localhost:3003/api/blogs", blog)
  .then((response) => {
    console.log("success!");
  })
  .catch((error) => console.log("error"));

axios
  .get(apiUrl)
  .then((response) => {
    console.log("success", response.data);
  })
  .catch((error) => console.log("error", error.response.data));
*/
axios
  .delete(`${apiUrl}/65a16e98418af474427f3b76`)
  .then((response) => {
    console.log("success", response.data);
  })
  .catch((error) => console.log("error", error.response.data));
