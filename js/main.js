/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var button = document.querySelector('#menu-button');
var nav = document.querySelector('#mobile-nav');

function toggleMenu() {
	nav.classList.toggle('is-open')
}

button.addEventListener('click', toggleMenu)

/* deze functie opent en sluit het menu op mobiel formaat */
