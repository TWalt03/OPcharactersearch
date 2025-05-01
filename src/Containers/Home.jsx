import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'tachyons';


function Home() {
    return(
        <div className='tc'>
             {/* <ParticlesBg type="cobweb" bg={true} /> */}
            <h1 className='gold-outline f-headline lh-solid'>Welcome to One Piece Character Search</h1>
            <Link to="/characters">
                <button className='button1'>
                    Enter
                </button>
            </Link>
        </div>
    );
}
export default Home;