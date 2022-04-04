import ui from './ui';
import auth from './auth';
import images from './images';
import profile from './profile';
import orders from './orders';
import categories from './categories';
import admin from './admin';
import cart from './cart';
import checkout from './checkout';

export default [
    ...ui,
    ...auth,
    ...images,
    ...profile,
    ...orders,
    ...categories,
    ...cart,
    ...admin,
    ...checkout,
]