import React from "react";
import PostCard from "../Components/Postcard";

const posts = [
  { id: 1, title: "Post 1", content: "This is the first post." },
  { id: 2, title: "Post 2", content: "This is the second post." },
];

const Feed = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
