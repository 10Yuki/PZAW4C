import Showmovie, { Showbook, Showalbum } from "./Components";
import type { Props_movie, Props_book, Props_song, Props_album } from "./Components";

const movies: Props_movie[] = [
  { title : "Oppenheimer", year : 2023, image_src : "https://fwcdn.pl/fpo/28/17/10002817/8072064_2.10.webp" },
  { title: "Pingwiny z Madagaskaru", year : 2014, image_src : "https://fwcdn.pl/fpo/46/09/664609/7634915_1.10.webp"},
  { title: "Incepcja", year : 2010, image_src : "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp"},
]


const books: Props_book[] = [
  { title : "W pustyni i w puszczy", cover : "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/W_pustyni_i_w_puszczy_1912.jpg/250px-W_pustyni_i_w_puszczy_1912.jpg?utm_source=pl.wikipedia.org&utm_campaign=parser&utm_content=thumbnail", year : 2019, numofpages : 400 },
  { title : "Lalka", cover : "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Lalka_-_strona_tytulowa_1_wydania.jpg/250px-Lalka_-_strona_tytulowa_1_wydania.jpg?utm_source=pl.wikipedia.org&utm_campaign=parser&utm_content=thumbnail", year: 2025, numofpages : 120 },
  { title: "Nela w krainie wulkanów", cover : "https://ksiazkineli.pl/wp-content/uploads/2025/12/Nela_w_krainie_wulkanow-600x781.jpg", year : 1890, numofpages : 1000}
]

const songsalbum1: Props_song[] = [
  { title: "Make Them Cry", duration: "5:07" },
  { title: "Dust", duration: "3:09" },
]

const songsalbum2: Props_song[] = [
  { title: "Road Trips", duration: "4:03" },
  { title: "Which One", duration: "2:49" },
]

const albums: Props_album[] = [
  { title : "Iceman", artist : "Drake", genre : "Hip-hop", year : 2026, cover : "https://upload.wikimedia.org/wikipedia/en/c/c6/Drake_-_Iceman.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", tracks : songsalbum1 },
  { title: "MAID OF HONOUR", artist : "Drake", genre : "Hip-hop", year : 2026, cover : "https://upload.wikimedia.org/wikipedia/en/8/8e/Drake_-_Maid_of_Honour.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", tracks : songsalbum2},
]

function App(){
  return(
    <div>
      <Showmovie movies={movies}/>
      {books.map((book) => (
        <Showbook key={book.title} title={book.title} cover={book.cover} year={book.year} numofpages={book.numofpages} />
      ))}
      {albums.map((album) => (
        <Showalbum key={album.title} title={album.title} artist={album.artist} genre={album.genre} year={album.year} cover={album.cover} tracks={album.tracks} />
      ))}
    </div>
  );
}
export default App