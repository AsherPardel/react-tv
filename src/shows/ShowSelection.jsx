import "./shows.css";
//import { tvShows } from "./data";
//import { useState } from "react";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  selectedShow,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          className={
            "show" + (show === selectedShow ? " selected" : "")
          } /* added a space before 'selected' */
          key={show.name}
          /*href="#" /* keeps the anchor clickable and prevents default reloads if needed */
          onClick={(e) => {
            e.preventDefault(); /*stops the page from jumping or reloading */
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
