import React, { useState } from "react";
import Form from "./FormStyled";

export const FormEvent = () => {
  const usersData = [
    {
      id: 1,
      eventName: "",
      hostName: "",
      eventStart: "",
      eventEnd: "",
      locationName: "",
      avatar: "",
    },
  ];
  const [data, setData] = useState(usersData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };
  return (
    <Form>
      <form class="register-form ">
        <label for="event-name" style={{ fontSize: 20, fontWeight: "bold" }}>
          Event Name:
        </label>
        <input
          id="event-name"
          class="form-field"
          type="text"
          placeholder="Event Name"
          name="eventName"
          onChange={handleInputChange}
          value={data.eventName}
        />

        <label for="host-name" style={{ fontSize: 20, fontWeight: "bold" }}>
          Host Name:
        </label>
        <input
          id="host-name"
          class="form-field"
          type="text"
          placeholder="Host Name"
          name="hostName"
          onChange={handleInputChange}
          value={data.hostName}
        />

        <label for="start" style={{ fontSize: 20, fontWeight: "bold" }}>
          Start date:
        </label>
        <input
          id="start"
          class="form-field"
          type="date"
          name="eventStart"
          min="2022-01-01"
          max="2022-12-31"
          onChange={handleInputChange}
          value={data.eventStart}
        ></input>
        <label for="start" style={{ fontSize: 20, fontWeight: "bold" }}>
          End date:
        </label>
        <input
          id="end"
          class="form-field"
          type="date"
          name="eventEnd"
          min="2022-01-01"
          max="2022-12-31"
          onChange={handleInputChange}
          value={data.eventEnd}
        ></input>
        <label for="Location-name" style={{ fontSize: 20, fontWeight: "bold" }}>
          Location Name:
        </label>
        <input
          id="Location-name"
          class="form-field"
          type="text"
          placeholder="Location Name"
          name="locationName"
          onChange={handleInputChange}
          value={data.locationName}
        />
        <label for="avatar" style={{ fontSize: 20, fontWeight: "bold" }}>
          Choose a profile picture:
        </label>

        <input
          id="avatar"
          class="form-field"
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={handleInputChange}
          value={data.avatar}
        />
      </form>
    </Form>
  );
};
