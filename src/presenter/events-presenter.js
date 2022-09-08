import {render} from '../render.js';

//import LoadingView from './view/loading-view.js';
//import FiltersFormView from '../view/filters-form-view.js';
import TripEventsListView from '../view/events-list-view.js';
import SortFormView from '../view/sort-form-view.js';

export default class EventsPresenter{
  eventsListContainer;
  tripEventsListComponent;
  sortFormComponent;

  constructor() {
    this.tripEventsListComponent = new TripEventsListView();
    this.sortFormComponent = new SortFormView();
  }

  init (eventsListContainer){
    this.eventsListContainer = eventsListContainer;
    render(this.sortFormComponent, this.eventsListContainer);
    render(this.tripEventsListComponent, this.eventsListContainer);
  }

}
