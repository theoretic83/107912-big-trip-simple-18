import LoadingView from './view/loading-view.js';
import { render } from './render.js';

const tripEventsElement = document.querySelector('.trip-events');
render(new LoadingView(), tripEventsElement);
