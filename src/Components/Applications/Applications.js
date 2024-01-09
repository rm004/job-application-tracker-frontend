import React from "react";
import Card from "../Card/Card";

const Applications = ({ getUserApps }) => {
  const apps = getUserApps();

  return (
    <div>
      <h1>Applications!</h1>
      {
        apps.map((app, index) => {
          return (
            <Card key={index} application={app}/>
          );
        })
      }
    </div>
  );
}

export default Applications;
