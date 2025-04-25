import React from 'react';

 
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
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
          
            <div>
                <h1 className='f2 ttu tracked'>{name}</h1>
                <h2 className='f4 lh-copy'>{formatBounty(bounty)}</h2>
                 <p className='f4 lh-copy'>{Job(job)}</p>
            </div>
        </div>
    );
}

export default Card;