import React from "react";
import { Link } from "react-router-dom";

const urlImage =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T073117Z&X-Amz-Expires=86400&X-Amz-Signature=7b8f21294a88679a06d3b8cd6b73cff5d5372f9f8d2aa438c882960b22167a86&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject";
const altImage = "Landing Page Image";

const Home = () => {
  return (
    <>
      <div className="container flex justify-between">
        <img
          style={{ height: `550px`, width: `440px` }}
          class="mx-40 my-10"
          src={urlImage}
          alt={altImage}
        ></img>

        <div class="text-right md:text-right md:self-center lg:mr-24">
          <h1 class="mb-5 min-h-[90px] lg:min-h-[120px] text-3xl font-bold lg:mb-8 md:text-4xl lg:text-5xl xl:text-6xl">
            <span class="block" style={{ color: `#240D57` }}>
              Imagine if
            </span>
            <span class="block md:inline min-w-[170px] text-danger">
              <span style={{ color: `#E87BF8` }}>Snapchat</span>
            </span>{" "}
            <span class="block" style={{ color: `#240D57` }}>
              {" "}
              had events.
            </span>
          </h1>
          <p
            class="mb-5 lg:mb-12 text-text-primary md:text-xl lg:text-3xl"
            style={{ color: `#4F4F4F` }}
          >
            Easily host and share events with your friends across any social
            media.
          </p>
          <div class="grid place-items-center md:place-items-end">
            <Link to="/createevent">
              <a
                class="relative px-12 py-3 md:px-20 md:py-4 font-bold rounded-lg md:text-lg shadow-lg text-grey-100 animate-gradient bg-[linear-gradient(90deg,#501FC1,#C245D3,#F0567A)] bg-[length:300%] "
                href="/createevent"
              >
                🎉 Create my event
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
