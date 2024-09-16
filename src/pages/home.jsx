import React from "react";
import SearchBar from "../component/searchbar";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl gap mx-auto sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
              <div className="pr-12 sm:pr-0">
                <div className="relative max-w-xs mb-12">
                  <img
                    className="object-bottom rounded-md scale-70 -bottom-12 -right-12"
                    src="https://www.basketballnetwork.net/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkyMDA0NjYyOTEwNTI2OTE5/michael-jordan.webp"
                    alt="Photo of Michael Jordan"
                  />

                  <img
                    className="absolute origin-bottom-right scale-70 rounded-md -bottom-16 -right-44"
                    src="https://media.cnn.com/api/v1/images/stellar/prod/230523093708-01-lebron-james-052223.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
                    alt="Photo of LeBron James"
                  />
                </div>
              </div>

              <div className="p-6">
                <h2 className="py-2 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Find Your GOAT
                </h2>
                <p className="py-4 text-base leading-relaxed text-gray-600">
                  Enter your favorite player's name to compare their overall
                  stats and find out who is truly the greatest of all time.
                </p>
              </div>
            </div>
          </div>

          <div className=" mx-auto mt-20 max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Compare Players
            </h2>
            <div className=" flex justify-center gap-8 mt-10">
              <SearchBar />
            </div>
            <p className="text-center mt-10">
              Currently our data is only accurate between the years of 1993 to
              2024
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Home;
