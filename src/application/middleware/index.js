import ui from './ui';
import auth from './auth';
import images from './images';
import profile from './profile';
import orders from './orders';
import categories from './categories';
import cart from './cart';
import checkout from './checkout';

import adminUi from './admin/ui';
import adminImages from './admin/images';
import adminOrders from './admin/orders';
import adminCategories from './admin/categories';
import adminTransactions from './admin/transactions';
import adminUsers from './admin/users';


export default [
    ...ui,
    ...auth,
    ...images,
    ...profile,
    ...orders,
    ...categories,
    ...cart,
    ...checkout,
    ...adminUi,
    ...adminImages,
    ...adminOrders,
    ...adminCategories,
    ...adminUsers,
    ...adminTransactions
]