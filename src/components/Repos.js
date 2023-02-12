import React, { useState, useEffect } from "react";
import Axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  const fetchRepos = async () => {
    console.log("Repos url ", repos_url);
    const { data } = await Axios.get(repos_url);
    console.log("Repo data: ", data);
    setRepos(data);
  };
  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
