import { combineReducers } from 'redux';
import ui from './ui';
import auth from './auth';
import images from './images';
import orders from './orders';
import profile from './profile';
import categories from './categories';

export default combineReducers({
    ui,
    auth,
    images,
    orders,
    profile,
    categories,
})