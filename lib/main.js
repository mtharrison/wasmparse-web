import React from 'react';
import { render } from 'react-dom';

import FileBox from './components/filebox';

import TypesSection from './components/sections/types';

import('wasmparse-bridge').then((instance) => {

    // React

    render(
      <div>
        <FileBox/>
        <TypesSection/>
      </div>,
      document.getElementById('root')
    );

    const f = document.getElementById('file');

    document.getElementById('file').addEventListener('input', (e) => {
        const file = f.files[0];
        const fr = new FileReader();

        fr.onload = () => {
            const ab = fr.result;
            const typed = new Uint8Array(ab);

            const desc = JSON.parse(instance.json(typed));
            console.log(desc);
            document.getElementById('output').innerText = desc;
        }

        fr.readAsArrayBuffer(file);
    });
});
