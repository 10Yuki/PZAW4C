interface Props_movie {
  /** Tytuł filmu. */
  title: string;
  /** Rok wydania filmu. */
  year: number;
  /** URL lub ścieżka do plakatu. */
  image_src: string;
}

function Showmovie({title, image_src, year}: Props_movie){
return (
  <div>
    <img src={image_src}/>
    <h4>{title}</h4>
    <p>{year}</p>
  </div>
  );
}

interface Props_book {
  /** Tytuł książki. */
  title: string;
  /** Rok wydania książki. */
  year: number;
  /** URL lub ścieżka do okładki. */
  cover: string;
  /** Liczba stron. */
  numofpages: number;
}

function Showbook({title, cover, year, numofpages}: Props_book){
return (
  <div>
    <img src={cover}/>
    <h4>{title}</h4>
    <p>{year}</p>
    <p>{numofpages}</p>
  </div>
  );
}

interface Props_song {
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

interface Props_album {
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
function Showalbum({ title, artist, genre, year, cover, tracks }: Props_album) {
  return (
    <div>
      <img src={cover} alt={`Okładka albumu ${title}`} />
      <h4>{title}</h4>
      <p>{artist} • {genre} • {year}</p>
      <ul>
        {tracks.map((track) => (
          <Showsong key={track.title} title={track.title} duration={track.duration} />
        ))}
      </ul>
    </div>
  );
}

function App(){
  return(
    <div>
      <Showmovie title="Oppenheimer" image_src="https://fwcdn.pl/fpo/28/17/10002817/8072064_2.10.webp" year={2023}/>
      <Showmovie title="Pingwiny z Madagaskaru" image_src="https://fwcdn.pl/fpo/46/09/664609/7634915_1.10.webp" year={2014}/>
      <Showmovie title="Incepcja" image_src="https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp" year={2010}/>
      <Showbook title="W pustyni i w puszczy" cover="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/W_pustyni_i_w_puszczy_1912.jpg/250px-W_pustyni_i_w_puszczy_1912.jpg?utm_source=pl.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" year={1911} numofpages={400}/>
      <Showbook title="Lalka" cover="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Lalka_-_strona_tytulowa_1_wydania.jpg/250px-Lalka_-_strona_tytulowa_1_wydania.jpg?utm_source=pl.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" year={2025} numofpages={120}/>
      <Showbook title="Nela w krainie wulkanów" cover="https://ksiazkineli.pl/wp-content/uploads/2025/12/Nela_w_krainie_wulkanow-600x781.jpg" year={1890} numofpages={1000}/>
      <Showalbum title="Iceman" artist="Drake" genre="Hip-hop" year={2026} cover="https://upload.wikimedia.org/wikipedia/en/c/c6/Drake_-_Iceman.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" tracks={[ { title: "Make Them Cry", duration: "5:07" }, { title: "Dust", duration: "3:09" }, ]}/>
      <Showalbum title="MAID OF HONOUR" artist="Drake" genre="Hip-hop" year={2026} cover="https://upload.wikimedia.org/wikipedia/en/8/8e/Drake_-_Maid_of_Honour.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" tracks={[ { title: "Road Trips", duration: "4:03" }, { title: "Which One", duration: "2:49" }, ]}/>
    </div>
  );
}
export default App
