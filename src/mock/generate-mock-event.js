import { getRandomInt } from '../utils.js';

const POINT_TYPE = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const DESCRIPTIONS = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras aliquet varius magna, non porta ligula feugiat eget.
Fusce tristique felis at fermentum pharetra.
Aliquam id orci ut lectus varius viverra.
Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis.
Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.
In rutrum ac purus sit amet tempus.`.trim().split('\n');

const generateDestination = ()=>(
  {
    id: 1,
    description: DESCRIPTIONS[getRandomInt(0,DESCRIPTIONS.length - 1)],
    name: 'Chamonix',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building'
      }
    ]
  }
);

const generateOffer = ()=>(
  {
    id: getRandomInt(0, 1000),
    title: 'Upgrade to a business class',
    price: getRandomInt(0, 10000)
  }
);

const generateOffersByType = ()=>(
  {
    type: POINT_TYPE[getRandomInt(0,POINT_TYPE.length - 1)],
    offers: [generateOffer(),generateOffer()]
  }
);


const generateEvent = (offersIDs)=>(
  {
    basePrice: getRandomInt(0, 10000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: generateDestination().id,
    id: getRandomInt(0, 10000),
    offers: offersIDs,
    type: POINT_TYPE[getRandomInt(0,POINT_TYPE.length - 1)]
  }
);

export {generateEvent, generateOffer};
