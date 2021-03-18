import React from 'react';
import PropTypes from 'prop-types';
import Potato from './Potato.js';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'ramen',
    image: 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg',
    rating: 2,
  },
  {
    id: 3,
    name: 'GMPD',
    image: 'https://i.pinimg.com/originals/01/ea/36/01ea369ddef9d4b7e8631afe678d2660.jpg',
    rating: 3.5
  },  
  {
    id: 4,
    name: 'BDSM',
    image: 'https://image.dhgate.com/0x0s/f2-albu-g8-M00-5C-AD-rBVaV1wnfGCAElj_AAIDhtPI7Fg690.jpg/sm-bdsm.jpg',
    rating: 10
  }
];

function App() {
  return (
    <div>
   {foodILike.map(dish => (
   <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
   ))}
   <Potato />
    </div>
  );
}

Food.propTypes= {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App; 