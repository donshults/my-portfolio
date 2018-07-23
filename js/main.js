import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork =[
    {
        'title': 'Burger Builder using React',
        'href': 'http://lp.collaborationsecrets.com/burgerbuilder/',
        'desc': 'ReactJS based with Firebase Integration. This app is hosted on Amazon S3 and is a example of building a SPA with ReactJS. Code is responsive, and includes an authentication system for creating and managing access via OAuth.',
        'image': {
            'desc': 'ReactJS Based App using Firebase for Data and Authentication',
            'src': 'images/BurgerBuilderSnap.png',
            'comment': 'Burger Builder Snap'
        }
    },
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
