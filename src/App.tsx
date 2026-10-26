import { Showmovie, Showbook, Showalbum, Section } from "./Components";
import type { Props_movie, Props_book, Props_song, Props_album } from "./Components";

const movies: Props_movie[] = [
  { title: "Oppenheimer", year: 2023, image_src: "https://fwcdn.pl/fpo/28/17/10002817/8072064_2.10.webp", rating: 10 },
  { title: "Pingwiny z Madagaskaru", year: 2014, image_src: "https://fwcdn.pl/fpo/46/09/664609/7634915_1.10.webp", rating: 4 },
  { title: "Incepcja", year: 2010, image_src: "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp", rating: 10 },
  { title: "Matrix", year: 1999, image_src: "https://fwcdn.pl/fpo/06/28/628/7685907_1.10.webp", rating: 9 },
  { title: "Forrest Gump", year: 1994, image_src: "https://fwcdn.pl/fpo/09/98/998/8021615_1.10.webp", rating: 8 },
  { title: "Interstellar", year: 2014, image_src: "https://fwcdn.pl/fpo/56/29/375629/7670122_2.10.webp", rating: 9 },
  { title: "Parasite", year: 2019, image_src: "https://fwcdn.pl/fpo/81/43/798143/7895390_2.10.webp", rating: 6 },
]


const books: Props_book[] = [
  { title: "W pustyni i w puszczy", cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/W_pustyni_i_w_puszczy_1912.jpg/250px-W_pustyni_i_w_puszczy_1912.jpg?utm_source=pl.wikipedia.org&utm_campaign=parser&utm_content=thumbnail", year: 2019, numofpages: 400 },
  { title: "Lalka", cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Lalka_-_strona_tytulowa_1_wydania.jpg/250px-Lalka_-_strona_tytulowa_1_wydania.jpg?utm_source=pl.wikipedia.org&utm_campaign=parser&utm_content=thumbnail", year: 2025, numofpages: 120 },
  { title: "Nela w krainie wulkanów", cover: "https://ksiazkineli.pl/wp-content/uploads/2025/12/Nela_w_krainie_wulkanow-600x781.jpg", year: 1890, numofpages: 1000 }
]

const songsalbum1: Props_song[] = [
  { title: "Make Them Cry", duration: "5:07" },
  { title: "Dust", duration: "3:09" },
  { title: "cos tam nie chce mi sie szukac wiecej", duration: "3:30" },
  { title: "cos tam nie chce mi sie szukac wiecejv3", duration: "8:10" },
]

const songsalbum2: Props_song[] = [
  { title: "Road Trips", duration: "4:03" },
  { title: "Which One", duration: "2:49" },
  { title: "cos tam nie chce mi sie szukac wiecejv2", duration: "3:30" },
]
const songsalbumtest: Props_song[] = [
]


const albums: Props_album[] = [
  { title: "Iceman", artist: "Drake", genre: "Hip-hop", year: 2026, cover: "https://upload.wikimedia.org/wikipedia/en/c/c6/Drake_-_Iceman.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", tracks: songsalbum1 },
  { title: "MAID OF HONOUR", artist: "Drake", genre: "Hip-hop", year: 2026, cover: "https://upload.wikimedia.org/wikipedia/en/8/8e/Drake_-_Maid_of_Honour.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", tracks: songsalbum2 },
  { title: "test", artist: "test", genre: "test", year: 2026, cover: "invalid", tracks: songsalbumtest },
]

// sortowanie
movies.sort((a, b) => a.title.localeCompare(b.title));
books.sort((a, b) => a.title.localeCompare(b.title));
albums.sort((a, b) => a.title.localeCompare(b.title));

// filmy po 2010
const moviesAfter2010 = movies.filter((m) => m.year > 2010);

// książki od najnowszej
const booksByYear = [...books].sort((a, b) => b.year - a.year);

// najwiecej utworów
const longestAlbum = albums.reduce((best, a) => {
  if (a.tracks.length > best.tracks.length) {
    return a;
  }
  return best;
});

// <Section></Section> to mozliwosc zawijania

function App() {
  return (
    <div className="container">
      
      <Section title="Filmy">
        <Showmovie movies={movies} />
      </Section>

      <Section title="Filmy po 2010">
        <Showmovie movies={moviesAfter2010} />
      </Section>

      <Section title="Książki">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {books.map((book) => (
            <Showbook key={book.title} title={book.title} cover={book.cover} year={book.year} numofpages={book.numofpages} />
          ))}
        </div>
      </Section>

      <Section title="Książki od najnowszej">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {booksByYear.map((book) => (
            <Showbook key={book.title} title={book.title} cover={book.cover} year={book.year} numofpages={book.numofpages} />
          ))}
        </div>
      </Section>

      <Section title="Albumy">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {albums.map((album) => (
            <Showalbum key={album.title} title={album.title} artist={album.artist} genre={album.genre} year={album.year} cover={album.cover} tracks={album.tracks} />
          ))}
        </div>
      </Section>

      <Section title="Album z największą liczbą utworów">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <Showalbum title={longestAlbum.title} artist={longestAlbum.artist} genre={longestAlbum.genre} year={longestAlbum.year} cover={longestAlbum.cover} tracks={longestAlbum.tracks} />
        </div>
      </Section>

    </div>
  );
}
export default App