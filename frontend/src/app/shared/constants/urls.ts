import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:5000';
// const BASE_URL = 'http://localhost:5000';

export const COMPUTERPART_URL = BASE_URL + '/api/computer-parts';
export const COMPUTERPARTS_TAGS_URL = COMPUTERPART_URL + '/tags/all'; // ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ?
export const COMPUTERPARTS_BY_SEARCH_URL = COMPUTERPART_URL + '/search/';
export const COMPUTERPARTS_BY_TAG_URL = COMPUTERPART_URL + '/tag/';
export const COMPUTERPART_BY_ID_URL = COMPUTERPART_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';