import React from 'react';
import '../Containers/App'
import '../Containers/Info'
import './Card.css'
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

const Card = (props) => {
    const { name, job, bounty, id } = props;
    return(
   
            <div className='bounty tc grow br3 pa3 ma2 dib bw2 shadow-5'>
              
                <div>
                    <Link to= {`/info/${id}`}>
                        <button className='butt1'>
                            <h1 className='name f1 ttu tracked'>{name}</h1>
                        </button>
                    </Link>
                    <h2 className='name1 f2 lh-copy'>{formatBounty(bounty)}</h2>
                     <p className='name1 f2 lh-copy'>{Job(job)}</p>
                </div>
            </div>
    //    
    );
}

export default Card;