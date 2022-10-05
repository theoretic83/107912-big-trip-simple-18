import {createElement} from '../render.js';

const EMPTY_POINTS_MESSAGES = new Map([
  ['loading', 'Loading...'],
  ['everythingFilter', 'Click New Event to create your first point'],
  ['pastFilter', 'There are no past events now'],
  ['futureFilter', 'There are no future events now']
]);

const createNewMessages = (massageKey) => `<p class="trip-events__msg">${EMPTY_POINTS_MESSAGES.get(massageKey)}</p>`;


export default class LoadingView {
  element;

  getTemplate(){
    return createNewMessages('loading');
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
