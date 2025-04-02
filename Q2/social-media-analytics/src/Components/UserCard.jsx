import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border p-4 my-2 rounded shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Posts: {user.postCount}</p>
    </div>
  );
};

export default UserCard;
