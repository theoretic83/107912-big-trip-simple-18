import {createElement} from '../render.js';
//import {humanizeDate, humanizeTime} from '../utils.js';
import {DateTimeFormat} from '../utils.js';

const createNewEventTripTemplate = (eventTrip) => {
  // const dateFrom = humanizeDate(eventTrip.dateFrom);
  // const startTime = humanizeTime(eventTrip.dateFrom);
  // const endTime = humanizeTime(eventTrip.dateTo);
  const dateStart = new DateTimeFormat(eventTrip.dateFrom);
  const dateEnd = new DateTimeFormat(eventTrip.dateTo);

  const {id, type} = eventTrip;

  const template =
  `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${dateStart.longDate}">${dateStart.date}</time>
    <div class="event__type">
      <img class="event__type-icon" src="img/icons/taxi.png" alt="Event type icon" width="42" height="42">
    </div>
    <h3 class="event__title">Taxi Amsterdam</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateStart.longDateTime}">${dateStart.time}</time>
        —
        <time class="event__end-time" datetime="${dateEnd.longDateTime}">${dateEnd.time}</time>
      </p>
    </div>
    <p class="event__price">
      €&nbsp;<span class="event__price-value">20</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">Order Uber</span>
        +€&nbsp;
        <span class="event__offer-price">20</span>
      </li>
    </ul>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;

  return template;
};

export default class EventView {
  element;
  eventTrip;

  constructor(eventTrip){
    this.eventTrip = eventTrip;
  }

  getTemplate(){
    return createNewEventTripTemplate(this.eventTrip);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
