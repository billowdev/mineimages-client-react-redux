import { combineReducers } from 'redux';
import ui from './ui';
import auth from './auth';
import images from './images';
import orders from './orders';
import profile from './profile';
import categories from './categories';
import admin from './admin';
import cart from './cart';
import checkout from './checkout';

export default combineReducers({
    ui,
    auth,
    images,
    orders,
    profile,
    categories,
    cart,
    checkout,
    admin,
})