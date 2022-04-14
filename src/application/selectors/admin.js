export const getAllImages = state => state.adminImages.allImages;
export const getModalImages = state => state.adminImages.modalImages;
export const getImageById = state => state.adminImages.imageById
export const getAllOrders = state => state.adminOrders.allOrders;

export const getAllOrdersOnTransactions = state => state.adminTransactions.pendingTransactions;
export const getCompletedTransactions = state => state.adminTransactions.completedTransactions;


export const getCategoriesById = state => state.adminCategories.category;


export const getAllUsers = state => state.adminUsers.allUsers;
export const getModalUsers = state => state.adminUsers.modalUsers;

