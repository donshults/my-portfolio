import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork =[
    {
        'title': 'Burger Builder using React1',
        'href': 'https://example.com',
        'desc': 'Some General Info',
        'image': {
            'desc': 'ReactJS Based App using Firebase for Data and Authentication',
            'src': 'images/BurgerBuilderSnap.png',
            'comment': 'Burger Builder Snap'
        }
    },
    {
        'title': 'Burger Builder using React2',
        'href': 'https://example.com',
        'desc': 'Some General Info',
        'image': {
            'desc': 'ReactJS Based App using Firebase for Data and Authentication',
            'src': 'images/BurgerBuilderSnap.png',
            'comment': 'Burger Builder Snap'
        }
    },
    {
        'title': 'Burger Builder using React3',
        'href': 'https://example.com',
        'desc': 'Some General Info',
        'image': {
            'desc': 'ReactJS Based App using Firebase for Data and Authentication',
            'src': 'images/BurgerBuilderSnap.png',
            'comment': 'Burger Builder Snap'
        }
    }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
