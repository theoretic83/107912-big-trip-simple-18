import {generateEvent, generateOffer} from '../mock/generate-mock-event.js';

export default class EventsModel {
  offers = Array.from({length: 5}, generateOffer);
  events = Array.from({length: 3}, generateEvent);
  getEvents = () => this.events;
}
