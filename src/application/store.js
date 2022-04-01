import { compose, applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import middleware from "./middleware";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// dev tool
const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const configureStore = (services) =>
  createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware.map((f) => f(services))))
  );


