import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div class="pr-12 sm:pr-0">
              <div class="relative max-w-xs mb-12">
                <img
                  class="object-bottom rounded-md scale-70 -bottom-12 -right-12"
                  src="https://www.basketballnetwork.net/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkyMDA0NjYyOTEwNTI2OTE5/michael-jordan.webp"
                  alt="Photo of Michael Jordan"
                />

                <img
                  class="absolute origin-bottom-right scale-70 rounded-md -bottom-16 -right-44"
                  src="https://media.cnn.com/api/v1/images/stellar/prod/230523093708-01-lebron-james-052223.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
                  alt="Photo of LeBron James"
                />
              </div>
            </div>

            <div>
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Find Your GOAT
              </h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">
                Enter your favorite player's name and season to compare their
                highest peaks and find out who is the greatest of all time.
              </p>
              <button
                type="button"
                class="bg-slate-950 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              >
                <NavLink to="/compareplayer">Get Started</NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
