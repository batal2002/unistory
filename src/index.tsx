import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Config, DAppProvider, Mainnet} from "@usedapp/core";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

const config: Config = {
    readOnlyChainId: Mainnet.chainId,
}

root.render(
    <DAppProvider config={config}>
        <Provider store={store}>
            <App/>
        </Provider>
    </DAppProvider>
);

