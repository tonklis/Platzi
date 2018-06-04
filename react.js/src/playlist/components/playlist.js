import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props){
  return(
    <div className="Playlist">
    {
      props.playlist.map( (media) => {
        return (
          <Media
            openModal={props.handleOpenModal}
            {...media}
            key={media.id}
          />
        )
      })
    }
    </div>
  )
}

export default Playlist;
