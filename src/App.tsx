import { use, useState } from 'react'
import './App.css'

type CharacterRace = "Czlowiek" | "Elf" | "Krasnolud" | "Ork" | ""
type CharacterClass = "Wojownik" | "Mag" | "Lucznik" | ""
interface CharacterData {
  name: string;
  race: CharacterRace;
  classofcharacter: CharacterClass;
  level: number;
  description: string;
  isPublic: boolean;
}
interface ShowFormProps {
  onSubmit: (data: CharacterData) => void;
}
function ShowForm({ onSubmit }: ShowFormProps) {

  const [character, setCharacter] = useState<CharacterData>({
    name: "",
    race: "",
    classofcharacter: "",
    level: 1,
    description: "",
    isPublic: true
  })

  console.log(character)

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setCharacter(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function validateForm(character: CharacterData){
    const errors: Partial<Record<keyof CharacterData, string>> = { };
    if(character.name.trim().length < 3){
        errors.name = "Zbyt krótkie imie";
    }
    if(character.name.trim().length > 20){
        errors.name = "Zbyt długie imie";
    }
    if(character.race === ""){
        errors.race = "Brak wybranej rasy";
    }
    if(character.classofcharacter === ""){
        errors.raclassofcharacterce = "Brak wybranej klasy";
    }
    if(!isNaN(character.level)){
        errors.level = "To nie jest numer";
    }
    if(character.level < 1 || character.level > 100){
        errors.level = "Numer nie spełnia wymagań";
    }
    if(character.description.trim().length > 200){
      errors.description = "Za długi opis"
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Formularz został wysłany!");
  }

  return (
    <>
      <form onSubmit={ }>
        <label htmlFor="name">Podaj imię postaci: </label>
        <input
          id="name"
          type="text"
          name='name'
          value={character.name}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="rasa">Podaj rase postaci: </label>
        <select
          id="rasa"
          name='race'
          value={character.race}
          onChange={handleChange}
        >
          <option value=""> Wybierz Rase</option>
          <option value="Czlowiek">Czlowiek</option>
          <option value="Elf">Elf</option>
          <option value="Krasnolud">Krasnolud</option>
          <option value="Ork">Ork</option>
        </select>

        <br />

        <label htmlFor="klasa">Podaj klase postaci: </label>
        <select
          id="klasa"
          name='classofcharacter'
          value={character.classofcharacter}
          onChange={handleChange}
        >
          <option value="">Wybierz klase</option>
          <option value="Wojownik">Wojownik</option>
          <option value="Mag">Mag</option>
          <option value="Lucznik">Lucznik</option>
        </select>

        <br />

        <label htmlFor="lvl">Podaj lvl postaci: </label>
        <input
          name='level'
          id="lvl"
          type="number"
          value={character.level}
          min={1}
          max={100}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="description">Podaj opis postaci: </label>
        <textarea
          name='description'
          id="description"
          value={character.description}
          onChange={handleChange}
        ></textarea>

        <br />

        <input
          name='isPublic'
          type="checkbox"
          checked={character.isPublic}
          onChange={handleChange}
        />

        <br />

        <button type="button">Wyslij</button>
      </form >
    </>
  )
}

function ShowCharacter({ name, race, classofcharacter, level, description, isPublic }: CharacterData) {
  if (isPublic) {
    return (
      <div>
        <h1>Imię: {name}</h1>
        <h3>Level: {level}</h3>
        <h4>Rasa: {race}, Klasa: {classofcharacter}</h4>
        <p>Opis postaci: {description}</p>
      </div>
    )
  } else {
    return (
      <div>
        <h5>*Profil Prywatny</h5>
        <h1>Imię: {name}</h1>
        <h3>Level: {level}</h3>
        <h4>Rasa: {race}, Klasa: {classofcharacter}</h4>
        <p>Opis postaci: {description}</p>
      </div>
    )
  }
}

function App() {

  const character: CharacterData = {
    name: "Aragorn",
    race: "Czlowiek",
    classofcharacter: "Wojownik",
    level: 25,
    description: "Doswiadczony wojownik i przyszly krol Gondoru.",
    isPublic: false
  }

  return (
    <>
      <ShowForm />
      <ShowCharacter
        name={character.name}
        race={character.race}
        classofcharacter={character.classofcharacter}
        level={character.level}
        description={character.description}
        isPublic={character.isPublic}
      />
    </>
  )
}

export default App
