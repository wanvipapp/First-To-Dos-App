import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Post from "./Post/Post";

const Posts = () => {
  const showPost = useSelector((state) => state.todos.itemToDo);
  const postEndRef = useRef(null);

  // Scroll to latest post
  useEffect(() => {
    postEndRef.current?.scrollIntoView();
  }, [showPost]);

  const posts = showPost?.map((post) => {
    return (
      <Box
        key={post.id}
        sx={{
          margin: "0 auto",
          display: "flex",
        }}
      >
        <Post
          id={post.id}
          time={post.time}
          date={post.date}
          contents={post.content}
        />
        <div ref={postEndRef} />
      </Box>
    );
  });

  return <div>{posts}</div>;
};

export default Posts;
