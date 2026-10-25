export interface Props_movie {
  /** Tytuł filmu. */
  title: string;
  /** Rok wydania filmu. */
  year: number;
  /** URL lub ścieżka do plakatu. */
  image_src: string;
}

interface movies {
    movies: Props_movie[]
}

function Showmovie({movies}: movies){
return (
  <div>
    {movies.map(m =>
    <>
    <img src={m.image_src} alt={`Okładka filmu ${m.title}`}/>
    <h4>{m.title}</h4>
    <p>{m.year}</p></>
    )}
  </div>
  );
}
export default Showmovie;

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
return (
  <div>
    <img src={cover} alt={`Okładka książki ${title}`}/>
    <h4>{title}</h4>
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
  return (
    <div>
      <img src={cover} alt={`Okładka albumu ${title}`} />
      <h4>{title}</h4>
      <p>{artist} - {genre} - {year}</p>
      <ol>
        {tracks.map((track) => (
          <Showsong key={track.title} title={track.title} duration={track.duration} />
        ))}
      </ol>
    </div>
  );
}