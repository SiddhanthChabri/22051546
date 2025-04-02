import React from "react";
import PostCard from "../Components/Postcard";

const trendingPosts = [
  { id: 1, title: "Trending Post 1", content: "This post has the most comments!" },
  { id: 2, title: "Trending Post 2", content: "Another highly commented post!" },
];

const TrendingPosts = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🔥 Trending Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
