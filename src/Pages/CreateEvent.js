import React from "react";
import { FormEvent } from "../Components/FormEvent";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  return (
    <div class="mx-5">
      {" "}
      <Link to={"/"}>
        {" "}
        <button
          className="my-4  py-1 px-4 rounded-full"
          style={{ background: `#240D57`, color: `white` }}
        >
          Back
        </button>
      </Link>
      <h1
        style={{ color: `#E87BF8` }}
        class="mb-1 min-h-[90px] lg:min-h-[120px] text-3xl font-bold lg:mb-8 md:text-4xl lg:text-5xl xl:text-6xl"
      >
        Create your event
      </h1>
      <FormEvent />
      <Link to={"/event"}>
        <button
          className="my-2  py-1 px-4 "
          style={{ background: `#240D57`, color: `white` }}
          type="submit"
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default CreateEvent;
