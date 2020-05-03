import { createStore } from 'redux';
import usuarioReducer from './usuarioReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* É possível atualizar a chave com o nome do seu site */
const persistConfig = {
    key: 'sitemodelo',
    storage
};

const persistedReducer = persistReducer(persistConfig, usuarioReducer);


const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor }; 