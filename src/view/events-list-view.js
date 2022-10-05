import {createElement} from '../render.js';

const createNewEventsListTemplate = () => {
  const template = `<ul class="trip-events__list">
  
  </ul>`;
  return template;
};

export default class EventsListView {
  element;

  getTemplate(){
    return createNewEventsListTemplate();
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
