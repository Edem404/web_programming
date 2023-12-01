// import { reducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({reducer});

// export default store;

import { persistStore, persistReducer,  } from "redux-persist"
import storage from "redux-persist/lib/storage";
import { createStore } from "@reduxjs/toolkit";
import { reducer} from "./reducers";

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store)
