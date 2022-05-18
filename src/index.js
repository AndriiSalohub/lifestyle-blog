import React from "react";
import ReactDom from "react-dom";
import { App } from "containers/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "redux/rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
