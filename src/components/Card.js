import React from 'react';

const Card = ({details}) => {

  return (
    <div className='card'>
        {details.map((data) => {
          const { id, title, description, src } = data;
          return(
            <div key={id} className='content'>
              <img src={src} alt="yact" />
              <h3>{title}</h3>
              <p>{description}</p>

              <button className='btn'>Read Article</button>
            </div>
          )
          
        }
        )}
    </div>
  )
}

export default Card