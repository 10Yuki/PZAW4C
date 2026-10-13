// function Greeter(props: any){
//   console.log(props);
//   const who = "świecie";
//   return (
//   <p>
//     Witaj {who}!
//   </p>
//   );
// }
interface Props_movie{
  title: string;
  year: number;
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
interface Props_book{
  title: string;
  year: number;
  cover: string;
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
interface Props_album{
  
}
interface Props_song{
  
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
    </div>
  );
}
export default App