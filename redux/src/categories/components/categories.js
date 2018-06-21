import React from 'react';
import Category from './category';
import './categories.css';
import SearchContainer from '../../widgets/containers/search';
import Media from '../../playlist/components/media.js'

function Categories(props) {
  return(
    <div className="Categories">
    <SearchContainer />
      {
        props.isLoading &&
        <p>Buscando tus videos favoritos...</p>
      }
      {
        props.search.map((item) => {
          return (
            // lo correcto sería mandar las propiedades una a una porque toJS crea objetos dentro del ciclo
            <Media
              openModal={props.handleOpenModal}
              {...item.toJS()}
              key={item.get('id')}
            />
          )
        })
      }
      {
        props.categories.map( (category) => {
          return (
            <Category 
              key={category.get('id')} 
              {...category.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories;
