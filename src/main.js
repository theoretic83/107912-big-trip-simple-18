import EventsPresenter from'./presenter/events-presenter.js';
import FiltersFormView from'./view/filters-form-view.js';
import { render } from './render.js';

const pageHeader = document.querySelector('.page-header');
const pageMain = document.querySelector('.page-main');

render(new FiltersFormView(), pageHeader.querySelector('.trip-controls__filters'));

const eventsPresenter = new EventsPresenter();
eventsPresenter.init(pageMain.querySelector('.trip-events'));
