import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
    key: "save_contacts",
    storage,
};

const filterPersistConfig = {
    key: "save_filter",
    storage,
};

const persistContactsReducer = persistReducer(
    contactsPersistConfig,
    contactsReducer
);

const persistFilterReducer = persistReducer(
    filterPersistConfig,
    filtersReducer
);

export const store = configureStore({
    reducer: {
        contacts: persistContactsReducer,
        filters: persistFilterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
