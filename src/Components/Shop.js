import React from 'react';
import Card from './Card';

import shoe1 from './../img/imageedit_1_6582031182.png';

export const Shop = () => {
    return (
        <div className="row">
            {Object.entries(shoes).map(([slug, { name, image }]) => {
                return <Card name={name} img={image} />
            })}
        </div>
    )
}

export default Shop;

const shoes = {
    "Nike-720T" : {
      name: "Nike 720T",
      image: shoe1
    },
    "Nike-M40" : {
      name:"Nike M40",
      image: shoe1
    },
    "Nike-LK11" : {
      name: "Nike LK11",
      image: shoe1
    },
    "Nike-Knight02" : {
      name: "Nike Knight02",
      image: shoe1
    },
    "Nike-R72" : {
      name: "Nike R72",
      image: shoe1
    },
    "Nike-TK65" : {
      name: "Nike TK65",
      image: shoe1
    }
  }