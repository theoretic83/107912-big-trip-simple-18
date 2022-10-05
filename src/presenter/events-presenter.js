import {render} from '../render.js';

//import LoadingView from './view/loading-view.js';
//import FiltersFormView from '../view/filters-form-view.js';
import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import SortFormView from '../view/sort-form-view.js';

export default class EventsPresenter{
  eventsSectionElement;
  sortFormComponent;
  eventsListComponent;
  eventsModel;
  boardEvents;

  constructor() {
    this.sortFormComponent = new SortFormView();
    this.eventsListComponent = new EventsListView();
  }

  init (eventsSectionElement, eventsModel){
    this.eventsSectionElement = eventsSectionElement;
    this.eventsModel = eventsModel;
    this.boardEvents = [...this.eventsModel.getEvents()];

    render(this.sortFormComponent, this.eventsSectionElement);
    render(this.eventsListComponent, this.eventsSectionElement);

    for(let i = 0; i < this.boardEvents.length; i++){
      render(new EventView(this.boardEvents[i]), this.eventsListComponent.getElement());
    }
  }
}
