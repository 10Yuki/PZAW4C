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
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {movies.map(m => {
      let label = "";
      if(m.rating >= 8){
        label = "Polecany";
      }
      return (
        <div className="col" key={m.title}>
          <div className="card h-100">
            <img className="card-img-top" style={{ height: "300px", objectFit: "cover" }} src={m.image_src} alt={`Okładka filmu ${m.title}`}/>
            <div className="card-body">
              <h5 className="card-title">{m.title} {label}</h5>
              <p className="card-text">{m.year}</p>
            </div>
          </div>
        </div>
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
  <div className="col">
    <div className="card h-100">
      <img className="card-img-top" style={{ height: "300px", objectFit: "cover" }} src={cover} alt={`Okładka książki ${title}`}/>
      <div className="card-body">
        <h5 className="card-title">{title} {label}</h5>
        <p className="card-text">{year}</p>
        <p className="card-text">{numofpages}</p>
      </div>
    </div>
  </div>
  );
}

export interface Props_song {
  /** Tytuł utworu. */
  title: string;
  /** Czas trwania w formacie mm:ss. */
  duration: string;
}

interface Props_songrow extends Props_song {
  /** Liczba porządkowa utworu na liście. */
  position: number;
}

function Showsong({ position, title, duration }: Props_songrow) {
  return (
    <tr>
      <td>{position}</td>
      <td>{title}</td>
      <td className="text-end">{duration}</td>
    </tr>
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
    tracklist = <div className="alert alert-warning mb-0">Brak utworów</div>;
  } else {
    tracklist = (
      <table className="table table-striped table-hover mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Tytuł</th>
            <th className="text-end">Czas</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, index) => (
            <Showsong key={track.title} position={index + 1} title={track.title} duration={track.duration} />
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <div className="col">
      <div className="card h-100">
        <img className="card-img-top" style={{ height: "300px", objectFit: "cover" }} src={cover} alt={`Okładka albumu ${title}`} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{artist} - {genre} - {year}</p>
          {tracklist}
        </div>
      </div>
    </div>
  );
}

export interface Props_section{
  /** Tytuł sekcji. */
  title: string;
  /** Treść sekcji. */
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
    <section className="mb-5">
      <h2 onClick={() => setIsOpen(!isOpen)}>{arrow} {title}</h2>
      {content}
    </section>
  );
}