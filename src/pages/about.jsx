import { SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 lg:p-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            About the Project
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            With my passion for sports and developing web applications, I sought
            to combine both and create a web application to settle the age-old
            debate of
          </p>
          <p className="text-3xl font-bold text-red-600 mb-8">
            WHO IS THE BEST OF ALL TIME!
          </p>
          <p className="text-lg text-gray-700 ">
            I hoped you enjoyed using this application as much as I enjoyed
            creating it!
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg mt-16 p-8 lg:p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Credits</h2>
          <p className="text-lg text-gray-700 mb-4">
            Special thanks to the creator of the free NBA GraphQL API, which
            provided the foundation for this project.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            You can find the API and documentation at the{" "}
            <a
              className="font-bold text-blue-700 hover:text-blue-900 hover:underline"
              href="https://documenter.getpostman.com/view/25652688/2sA2xjzBAS#b76f9a34-9439-491b-af8f-9ccff8a00c96"
              target="_blank"
              rel="noopener noreferrer"
            >
              NBA GraphQL API website
            </a>
            <p className="text-lg text-gray-700 mb-4">
              The project code can be found here on my{" "}
              <a
                className="font-bold text-blue-700 hover:text-blue-900 hover:underline"
                href="https://github.com/SdbnCode/NbaStatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub page
              </a>
            </p>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
