import React from 'react';
import ParticlesBg from 'particles-bg';
import { Link } from 'react-router-dom';
import 'tachyons';
import './Home.css';


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