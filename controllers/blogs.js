const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const logger = require("../utils/logger");

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate("user");
  response.json(blogs);
});

blogsRouter.post("/", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    logger.info("saved!", result);
    response.status(201).json(result);
  });
});

blogsRouter.delete("/:id", (request, response) => {
  Blog.findByIdAndRemove(request.params.id).then((result) => {
    response.status(204).end();
  });
});

blogsRouter.put("/:_id", (request, response) => {
  const body = request.body;
  /*
  const blog = {
    content: body.content,
    important: body.important,
  }
  */
  console.log("here ID:", request.params._id);
  Blog.findByIdAndUpdate(request.params._id, body, { new: true }) //return new doc
    .then((updatedBlog) => {
      console.log(updatedBlog);
      response.json(updatedBlog);
    });
});

module.exports = blogsRouter;
