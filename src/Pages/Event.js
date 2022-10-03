import React from "react";

const Event = () => {
  const altImage = "Event's cake";
  return (
    <div className=" container flex justify-between pt-5">
      <div class="pt-5 pl-5 ml-5 text-left md:text-left md:self-center ">
        <h1
          class="  text-3xl font-bold lg:mb-3 md:text-4xl lg:text-5xl xl:text-6xl "
          style={{ color: `#240D57` }}
        >
          <span class="block">Birthday Bash</span>
        </h1>

        <h1 class="text-l mb-5">
          <span class="block" style={{ color: `#4F4F4F` }}>
            Hosted By <b>Parth</b>
          </span>
        </h1>

        <div>
          <div className="container flex justify-items-end">
            <img
              class="mr-3"
              style={{ height: `32px`, width: `32px` }}
              src="/images/calendar-month.png"
              alt="calendar icon"
            ></img>
            <h1 class="mb-5 ">
              <span class="block font-bold " style={{ color: `#240D57` }}>
                18 August 6:00PM
              </span>
              <span class="block " style={{ color: `#4F4F4F` }}>
                <span>
                  to <b>19 August 1:00PM</b> UTC +10
                </span>
              </span>
            </h1>
          </div>

          <div className="container flex justify-items-end">
            <img
              class="mr-3"
              style={{ height: `32px`, width: `32px` }}
              src="/images/location-on.png"
              alt="calendar icon"
            ></img>
            <h1 class="mb-5 ">
              <span class="block font-bold " style={{ color: `#240D57` }}>
                Street Name
              </span>
              <span class="block ">
                <span>Suburb, State, Postcode</span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <img
        class="mt-20 mr-20"
        style={{ height: `300px`, width: `300px` }}
        src="/images/Birthday_cake.png"
        alt={altImage}
      ></img>
      {/* <EventCreated /> */}
    </div>
  );
};

export default Event;
