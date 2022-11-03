import {generateEvent, generateOffer} from '../mock/generate-mock-event.js';

export default class EventsModel {
  offers;
  events;

  constructor(){
    this.offers = Array.from({length: 3}, generateOffer);
    const offersIds = this.offers.map((current)=>(current.id));
    this.events = Array.from({length: 5}, generateEvent(offersIds));
  }

  getEvents = () => this.events;
  getOffers = () => this.offers.filter((offer)=>this.events.offersIds.find((offersId)=> offersId === offer.id));
}
