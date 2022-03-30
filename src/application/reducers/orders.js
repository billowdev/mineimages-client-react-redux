import { LOAD_ORDERS_SUCCESS } from "../actions/orders";
const initialState = {
  page: null,
  per_page: null,
  total_pages: null,
  total: null,
  data: [
    {
      id: null,
      status: null,
      price: null,
      createdAt: null,
      updatedAt: null,
      ImageId: null,
      UserId: null,
      TransactionId: null,
      Image: {
        id: null,
        publicId: null,
        name: null,
        detail: null,
        pathOrigin: null,
        pathWatermark: null,
        price: null,
        visible: null,
        status: null,
        remove: null,
        createdAt: null,
        updatedAt: null,
        CategoryId: null,
        UserId: null,
      },
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS_SUCCESS:
      return {
        page: action.payload.page,
        per_page: action.payload.per_page,
        total_pages: action.payload.total_pages,
        total: action.payload.total,
        data: [
          {
            id: action.payload.id,
            status: action.payload.status,
            price: action.payload.price,
            createdAt: action.payload.createdAt,
            updatedAt: action.payload.updatedAt,
            ImageId: action.payload.ImageId,
            UserId: action.payload.UserId,
            TransactionId: action.payload.TransactionId,
            Image: {
              id: action.payload.id,
              publicId: action.payload.publicId,
              name: action.payload.name,
              detail: action.payload.detail,
              pathOrigin: action.payload.pathOrigin,
              pathWatermark: action.payload.pathWatermark,
              price: action.payload.price,
              visible: action.payload.visible,
              status: action.payload.status,
              remove: action.payload.remove,
              createdAt: action.payload.createdAt,
              updatedAt: action.payload.updatedAt,
              CategoryId: action.payload.CategoryId,
              UserId: action.payload.UserId,
            },
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
