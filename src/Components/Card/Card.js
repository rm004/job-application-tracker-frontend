import React from "react";
import './Card.css';

const Card = ({ application }) => {
  return (
    <div className="application">
      <p>Title: {application.jobName}</p>
      <p>Company: {application.company}</p>
      <p>Location: {application.location}</p>
      <p>Date Applied: {application.dateApplied}</p>
      <p>Status: {application.status}</p>
      <p>Posting: {application.jobPosting}</p>
    </div>
  );
}

export default Card;
