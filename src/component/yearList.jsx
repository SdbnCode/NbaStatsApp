import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const years = Array.from(
  { length: 2024 - 1993 + 1 },
  (_, index) => 1993 + index
);

function YearList({ setYear }) {
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setYear(year);
  };

  return (
    <Listbox value={selectedYear} onChange={handleYearChange}>
      <div className="relative w-full mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-black sm:text-sm sm:leading-6">
          <span className="ml-3 block truncate">{selectedYear}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="w-full absolute mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {years.map((year) => (
            <ListboxOption
              key={year}
              value={year}
              className="group w-full relative cursor-pointer select-none py-2 pl-0 pr-3 text-black data-[focus]:bg-slate-800 data-[focus]:text-white"
            >
              <span className="flex items-center w-full justify-center">
                {year}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-black group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon
                  aria-hidden="true"
                  className="h-5 w-5  text-black group-data-[focus]:text-white"
                />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}

export default YearList;
