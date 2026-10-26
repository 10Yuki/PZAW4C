import { useState } from "react";
import type { ReactNode } from "react";

export interface Props_movie {
  /** Tytuł filmu. */
  title: string;
  /** Rok wydania filmu. */
  year: number;
  /** URL lub ścieżka do plakatu. */
  image_src: string;
  /** Numer 1-10. */
  rating: number;
}

export interface movies {
    movies: Props_movie[]
}

export function Showmovie({movies}: movies){
return (
  <div>
    {movies.map(m => {
      let label = "";
      if(m.rating >= 8){
        label = "Polecany";
      }
      return (
        <>
        <img src={m.image_src} alt={`Okładka filmu ${m.title}`}/>
        <h4>{m.title} {label}</h4>
        <p>{m.year}</p>
        </>
      );
    })}
  </div>
  );
}


export interface Props_book {
  /** Tytuł książki. */
  title: string;
  /** Rok wydania książki. */
  year: number;
  /** URL lub ścieżka do okładki. */
  cover: string;
  /** Liczba stron. */
  numofpages: number;
}

export function Showbook({title, cover, year, numofpages}: Props_book){
  let label = "";
  if(year<2000){
    label = "Klasyka";
  }
return (
  <div>
    <img src={cover} alt={`Okładka książki ${title}`}/>
    <h4>{title} {label}</h4>
    <p>{year}</p>
    <p>{numofpages}</p>
  </div>
  );
}

export interface Props_song {
  /** Tytuł utworu. */
  title: string;
  /** Czas trwania w formacie mm:ss. */
  duration: string;
}

function Showsong({ title, duration }: Props_song) {
  return (
    <li>
      {title} ({duration})
    </li>
  );
}

export interface Props_album {
  /** Tytuł albumu. */
  title: string;
  /** Wykonawca lub zespół. */
  artist: string;
  /** Gatunek muzyczny. */
  genre: string;
  /** Rok wydania albumu. */
  year: number;
  /** URL lub ścieżka do okładki. */
  cover: string;
  /** Lista utworów albumu. */
  tracks: Props_song[];
}

export function Showalbum({ title, artist, genre, year, cover, tracks }: Props_album) {
  let tracklist;
  if (tracks.length === 0) {
    tracklist = <p>Brak utworów</p>;
  } else {
    tracklist = (
      <ol>
        {tracks.map((track) => (
          <Showsong key={track.title} title={track.title} duration={track.duration} />
        ))}
      </ol>
    );
  }
  return (
    <div>
      <img src={cover} alt={`Okładka albumu ${title}`} />
      <h4>{title}</h4>
      <p>{artist} - {genre} - {year}</p>
      {tracklist}
    </div>
  );
}

export interface Props_section{
  title: string;
  children: ReactNode;
}

export function Section({title, children}: Props_section){
  const [isOpen, setIsOpen] = useState(true);
  let arrow = "⏵";
  let content = null;
  if (isOpen){
    arrow = "⏷";
    content = children;
  }
  return (
    <section>
      <h2 onClick={() => setIsOpen(!isOpen)}>{arrow} {title}</h2>
      {content}
    </section>
  );
}