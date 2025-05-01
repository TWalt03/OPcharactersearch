import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Character from '../Components/Character';
import ParticlesBg from 'particles-bg';
import './App.jsx'
import './Info.css'
import 'tachyons';

function Info() {
    const [character, setCharacters] = useState(null);
    const { id } = useParams();

    useEffect(() => {
            fetch(`https://api.api-onepiece.com/v2/characters/en/${id}`)
                .then((response) => response.json())
                .then((people) => {setCharacters(people)});
        }, [id]);

    if (!character) return <div className='tc'> Loading...</div>

    return(
       <div className='tc'>
            <Link to='/characters' className='link'>
                <button className='red button2 '>Exit</button>
            </Link>
            <Character {...character}/>
       </div>
    );
}

export default Info;