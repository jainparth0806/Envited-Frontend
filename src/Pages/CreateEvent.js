import React from "react";
import { FormEvent } from "../Components/FormEvent";
import Button from "../Components/ButtonEvents";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  return (
    <div>
      {" "}
      <Link to={"/"}>
        {" "}
        <Button>Back</Button>
      </Link>
      <h1>Create your event</h1>
      <FormEvent />
    </div>
  );
};

export default CreateEvent;
