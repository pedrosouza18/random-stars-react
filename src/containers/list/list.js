import React from 'react';
import ImageInitial from '../../components/imageInitial/imageInitial';
import Loader from '../../components/loader/loader';
import './list.css';

const list = (props) => {

    let planet = null;
    let image = null;

    if(!props.init) {
        image = null;
        if(!props.loader) {
            planet = (
                <Loader />
            );
        } else {
            planet = (
                <div>
                    <header>
                        <h1 className="box-planet__title">{props.planet.name}</h1>
                    </header>
                    <article className="box-planet__descriptions">
                        <div>Population: {props.planet.population}</div>
                        <div>Climate: {props.planet.climate}</div>
                        <div>Terrain: {props.planet.terrain}</div>
                        <div>Films: {props.planet.films.length}</div>
                    </article>
                </div>
            );  
        }
    } else {
        planet = null;
        image = (
            <ImageInitial />
        )
    }

    return (
        <div className="box-planet">
            <div>
                {planet}
            </div>
            {image}
        </div>
    );
}

export default list;