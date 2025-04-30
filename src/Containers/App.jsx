import React, {useState, useEffect} from 'react';
import ParticlesBg from 'particles-bg';
import CardList from '../Components/CardList';
import Card from '../Components/Card';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import 'tachyons';
import './App.css'
import { Link } from 'react-router-dom';


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
        <h1 className='gold-outline f-headline'>Loading...</h1>
      ) : (
        <div className="tc">
          
          <Link to='/' className='link'>
            <button className='red button2 '>Exit</button>
          </Link>
          <h1 className="gold-outline f-headline lh-solid">One Piece Characters</h1>
          {/* <ParticlesBg type="cobweb" bg={true} /> */}
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList characters={filteredCharacters}/>
          </Scroll>
        </div>
      );
}
export default App;