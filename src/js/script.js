/* desktop/katbiziniss
 *
 * /src/js/script.js - Main script for katbiziniss
 *
 * coded by maxime@flatLand !
 * started at 09/02/2017
 */
const $main = document.querySelector( "main" );
// document.querySelector( "nav a" ).addEventListener( "click", function( oEvent ) {
//     oEvent.preventDefault();
//     $main.classList.toggle( "flipped" );
// } );
document.querySelector( "nav a" ).addEventListener( "click", ( oEvent ) => {
    oEvent.preventDefault();
    $main.classList.toggle( "flipped" );
} );