import React from 'react';
import Card from './Card';

export const Shop = () => {
    return (
        <div className="row">
            {Object.entries(shoes).map(([slug, { name, image }]) => {
                return <Card name={name} img={image} key={name} />
            })}
        </div>
    )
}

export default Shop;

const shoes = {
    "Nike-720T" : {
      name: "Nike 720T",
      image: "https://img-load.ml/img/a1-"
    },
    "Nike-M40" : {
      name:"Nike M40",
      image: "https://img-load.ml/img/a2-"
    },
    "Nike-LK11" : {
      name: "Nike LK11",
      image: "https://img-load.ml/img/a3-"
    },
    "Nike-Knight02" : {
      name: "Nike Knight02",
      image: "https://img-load.ml/img/a4-"
    },
    "Nike-R72" : {
      name: "Nike R72",
      image: "https://img-load.ml/img/a1-"
    },
    "Nike-TK65" : {
      name: "Nike TK65",
      image: "https://img-load.ml/img/a2-"
    }
  }