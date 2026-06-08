/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import ShowDetails from "./shows/ShowDetails";
import EpisodeList from "./episodes/EpisodeList";
import { tvShows } from "./shows/data";
import { useState } from "react";
import ShowSelection from "./shows/ShowSelection";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [shows] = useState(tvShows);
  return (
    <body className="app">
      <div>
        <header>
          <h1>React TV</h1>
          <ShowSelection
            shows={shows}
            setSelectedShow={setSelectedShow}
            selectedShow={selectedShow}
          />
        </header>
        <ShowDetails key={selectedShow?.name} show={selectedShow} />
      </div>
    </body>
  );
}
