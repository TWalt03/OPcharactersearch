import React, {useState, useEffect} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'
import 'tachyons';
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
          
          <Link to='/info' className='link'>
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