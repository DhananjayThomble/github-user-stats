import React from "react";
import Card from "react-bootstrap/Card";

const UserCard = ({ user }) => {
  //   console.log(user);
  return (
    <Card className="text-center mt-3 mb-4">
      <img alt="" width={350} src={user.avatar_url} className="img-thumbnail" />
      <Card.Body>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-info">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </div>
        <div className="text-info">Followers {user.followers}</div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
