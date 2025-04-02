import React, { useEffect, useState } from "react";
import axios from "axios";

const users = [
  { id: 1, name: "Alice Johnson", posts: 150 },
  { id: 2, name: "Bob Smith", posts: 120 },
  { id: 3, name: "Charlie Brown", posts: 110 },
  { id: 4, name: "David Lee", posts: 105 },
  { id: 5, name: "Emma Wilson", posts: 100 },
];

const TopUsers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🏆 Top Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const UserCard = ({ user }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`https://i.pravatar.cc/150?img=${user.id}`) // Fetch a random profile image
      .then((response) => setImageUrl(response.config.url))
      .catch((error) => console.error("Error fetching user image:", error));
  }, [user.id]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
      {imageUrl && <img src={imageUrl} alt="User profile" className="w-16 h-16 rounded-full border-2 border-gray-300" />}
      <div>
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-gray-600">{user.posts} Posts</p>
      </div>
    </div>
  );
};

export default TopUsers;
