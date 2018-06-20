import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Module from './module';
import { reducer } from './reducers';
import App from './components/app';

import('wasmparse-bridge').then((instance) => {

    const store = createStore(reducer);

    // React

    const renderApp = () => {

        render(
          <Provider store={store}>
            <App/>
          </Provider>,
          document.getElementById('root')
        );
    };

    renderApp();
    store.subscribe(renderApp);

    const f = document.getElementById('file');

    document.getElementById('file').addEventListener('input', (e) => {
        const file = f.files[0];
        const fr = new FileReader();

        fr.onload = () => {
            const ab = fr.result;
            const typed = new Uint8Array(ab);

            const parsed = JSON.parse(instance.json(typed));
            console.log(parsed);

            store.dispatch({ type: 'PARSED', data: parsed });
        }

        fr.readAsArrayBuffer(file);
    });
});
