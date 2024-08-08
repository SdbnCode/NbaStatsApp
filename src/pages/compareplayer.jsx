import React from "react";
import { NavLink } from "react-router-dom";
import API from "../component/api";
import {
  Listbox as HeadlessListbox, // Renaming Listbox to avoid conflict
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

function Listbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <HeadlessListbox value={selectedPerson} onChange={setSelectedPerson}>
      <ListboxButton>{selectedPerson.name}</ListboxButton>
      <ListboxOptions anchor="bottom">
        {people.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            className="data-[focus]:bg-blue-100"
          >
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </HeadlessListbox>
  );
}

class ComparePlayer extends React.Component {
  render() {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center gap-4 py-4 w-auto">
          <input
            id=""
            name="player"
            type="name"
            required
            autoComplete="name"
            placeholder="player name"
            className="block w-auto rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
          />
          <div className="flex justify-center gap-4 py-4 w-auto">
            <Listbox />
          </div>
          <input
            id=""
            name="player"
            type="name"
            required
            autoComplete="name"
            placeholder="player name"
            className="block w-auto rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
          />
          <div className="flex justify-center gap-4 py-4 w-auto">
            <Listbox />
          </div>
        </div>

        <button
          type="submit"
          className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
        >
          Search
        </button>
        <p className="text-center">
          Currently our data is only accurate between the years of 1993 to 2024
        </p>
        <yearSearch />
      </div>
    );
  }
}

export default ComparePlayer;
