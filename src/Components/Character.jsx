import React from 'react';
import { Link } from 'react-router-dom';

 
function formatBounty(bounty) {
    if(bounty === null || bounty === undefined || bounty === ''){
        return 'Unknown'
    }
    return `${bounty} Berries`
}
function Job(job) {
    if(job === null || job === undefined || job === ''){
        return 'Job not known'
    }
    return `${job}`
}

function formatDevilFruit(devilFruit) {
    if(!devilFruit?.name) return 'None';
    return devilFruit.name;
}

const Character = (props) => {
    const { name,job,bounty, size, age, status, crew, devilFruit } = props;
    return(
        <div>
                <div className='bounty tc grow br3 pa3 ma2 dib bw2 shadow-5'>
                    <div>
                        <h1 className='name f1 ttu tracked'>{name}</h1>
                        <h2 className='name1 f2 lh-copy'>{formatBounty(bounty)}</h2>
                        <p className='name1 f2 lh-copy'>{Job(job)}</p>
                        <p className='name1 f2 lh-copy'>Size: {size || 'unknownn'}</p>
                        <p className='name1 f2 lh-copy'>Crew: {crew?.name ||'None'}</p>
                        <p className='name1 f2 lh-copy'>Devil Fruit:{formatDevilFruit(devilFruit)}</p>
                        <p className='name1 f2 lh-copy'>Age: {age.substring(0, age.length - 3)|| 'Unknown'}</p>
                        <p className='name1 f2 lh-copy'>Status: {status || 'Unknown'}</p>
                    </div>
                </div>
        </div>
    //    
    );
}

export default Character;