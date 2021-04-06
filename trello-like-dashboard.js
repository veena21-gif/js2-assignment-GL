'use strict';

import Board from './Board.js';
/*
const boardConfig = {
    name: 'Frontend Training',
    taskLists: [
        {
            name: 'To Do',
            tasks: [
                {
                    name: 'Learn HTML',
                    due: new Date( 2019, 11, 15 )
                },
                {
                    name: 'Learn CSS',
                    due: new Date( 2019, 11, 25 )
                },
                {
                    name: 'Learn JavaScript',
                    due: new Date( 2019, 12, 14 )
                }
            ]
        },
        {
            name: 'Doing',
            tasks: [
                {
                    name: 'Prepare resume',
                    due: new Date( 2019, 12, 31 )
                }
            ]
        },
        {
            name: 'Testing/Verifying',
            tasks: [
                {
                    name: 'Twitter app frontend',
                    due: new Date( 2019, 11, 20 )
                }
            ]
        },
        {
            name: 'Deploying',
            tasks: [
                {
                    name: 'Twitter app backend',
                    due: new Date( 2019, 11, 18 )
                }
            ]
        },
        {
            name: 'Done',
            tasks: []
        }
    ]
};
*/

let boardConfig = localStorage.getItem( 'board' );
if( !boardConfig ) {
    boardConfig = {
        name: 'New board',
        taskLists: []
    };
} else {
    boardConfig = JSON.parse( boardConfig );
}

const board = new Board( boardConfig, document.querySelector( '.board-container' ) );
board.render();

console.log( board );