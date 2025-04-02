import React, { useEffect, useState } from "react";
import axios from "axios";

const PostCard = ({ post }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Fetch a random image from Lorem Picsum
    axios
      .get("https://picsum.photos/200/300", { responseType: "blob" })
      .then((response) => {
        setImageUrl(URL.createObjectURL(response.data));
      })
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {imageUrl && <img src={imageUrl} alt="Random post" className="w-full h-48 object-cover rounded-md" />}
      <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
};

export default PostCard;
