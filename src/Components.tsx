interface Props_movie {
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