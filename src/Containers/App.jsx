import React, {useState, useEffect} from 'react';
import ParticlesBg from 'particles-bg';
import CardList from '../Components/CardList';
import Card from '../Components/Card';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'


function App(){
    const [characters, setCharacters] = useState([]);
    const [searchfield, setSearchfield] = useState(''); 
   

    useEffect(() => {
        fetch("https://api.api-onepiece.com/v2/characters/en")
            .then((response) => response.json())
            .then((people) => {setCharacters(people)});
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
      };

      const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(searchfield.toLowerCase());
      });

    return !characters.length ? (
        <h1>Loading...</h1>
      ) : (
        <div className="tc">
          <h1 className="f-headline lh-solid">One Piece Characters</h1>
          <ParticlesBg type="cobweb" bg={true} />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList characters={filteredCharacters}/>
          </Scroll>
        </div>
      );
}
export default App;