import React from 'react';
import './Card.css'
 
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

const Card = (props) => {
    const { name, job, bounty } = props;
    return(
        <div className='bounty tc grow br3 pa3 ma2 dib bw2 shadow-5'>
          
            <div>
                <h1 className='name f1 ttu tracked'>{name}</h1>
                <h2 className='name1 f2 lh-copy'>{formatBounty(bounty)}</h2>
                 <p className='name1 f2 lh-copy'>{Job(job)}</p>
            </div>
        </div>
    );
}

export default Card;