/*Agregando search boton para que cuando hagamos click en el boton nos diriga a la vista de busqueda */
searchFormBtn.addEventListener('click', ()=> location.hash= '#search=' + searchFormInput.value) /* en esta modificacion cumple como buscador de peliculas */

/*Agregando trending boton para que cuando hagamos click en el boton nos diriga a la vista de tendencias */
trendingBtn.addEventListener('click', ()=> location.hash='#trends=')
/*Agregando trending boton para que cuando hagamos click en el boton nos diriga a la vista principal que es Home */
arrowBtn.addEventListener('click', ()=> location.hash=history.back()) /* history.back nos devolvera la pagina anterior en la que estuvimos primero */

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();
    }else if(location.hash.startsWith('#movie=')){
        movieDetails();
    }else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else{
        homePage();
    }

    /* Esta parte del codigo ayuda a que cuando cambiemos de vista siempre se inicie en la parte superior de cada pagina */
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function homePage() {
    console.log('Home!!');

    /* Estas constantes las encuentras en nodes.js */
    headerSection.classList.remove('header-container--long');/*Indicando que la clase "header-container--long" sea removida */
    headerSection.style.background = ''; /* Nos dirigimo a la etiqueta style a la propiedad "background" y agregamos una imagen en vacio*/
    arrowBtn.classList.add('inactive');/* Agregando una clase "inactive" a constante arrowBtn*/
    arrowBtn.classList.add('header-arrow--white'); /*Removiendo la clase "header-arrow--white" a constante arrowBtn*/
    headerTitle.classList.remove('inactive'); /*Removiendo la clase "inactive" a constante headerTitle si es que ya lo tiene en el html*/
    headerCategoryTitle.classList.add('inactive') /* Agregando una clase "inactive" a constante headerCategoryTitle*/
    searchForm.classList.remove('inactive'); /*Removiendo la clase "inactive" a constante searForm*/

    trendingPreviewSection.classList.remove('inactive') /*Removiendo la clase "inactive" a constante trendingPreviewSection*/
    categoriesPreviewSection.classList.remove('inactive') /*Removiendo la clase "inactive" a constante categoriesPreviewSection*/
    genericSection.classList.add('inactive') /*Agregando una clase "inactive" a constante genericSection*/
    movieDetailSection.classList.add('inactive')/*Agregando una clase "inactive" a constante movieDetailSection*/

    getTraidingMoviesPreview()
    getCategoriesPreview()
}
function categoriesPage() {
    console.log('Categories!!');

    /* Estas constantes las encuentras en nodes.js */
    headerSection.classList.remove('header-container--long');/*Indicando que la clase "header-container--long" sea removida */
    headerSection.style.background = ''; /* Nos dirigimo a la etiqueta style a la propiedad "background" y agregamos una imagen en vacio*/
    arrowBtn.classList.remove('inactive');/* Removiendo la clase "inactive" a constante arrowBtn*/
    arrowBtn.classList.remove('header-arrow--white'); /*Removiendo la clase "header-arrow--white" a constante arrowBtn*/
    headerTitle.classList.add('inactive'); /*Agregando la clase "inactive" a constante headerTitle si es que ya lo tiene en el html*/
    headerCategoryTitle.classList.remove('inactive') /* Removiendo una clase "inactive" a constante headerCategoryTitle*/
    searchForm.classList.add('inactive'); /*Agregando la clase "inactive" a constante searForm*/

    trendingPreviewSection.classList.add('inactive') /*Agregando la clase "inactive" a constante trendingPreviewSection*/
    categoriesPreviewSection.classList.add('inactive') /*Agregando la clase "inactive" a constante categoriesPreviewSection*/
    genericSection.classList.remove('inactive') /*Removiendo una clase "inactive" a constante genericSection*/
    movieDetailSection.classList.add('inactive')/*Agregando una clase "inactive" a constante movieDetailSection*/

    /* Destructurando  el location.hash con el metodo split() para quedarnos solos con el "id" y el "nombre de la categoria" de peliculas*/
    const [_, categoryInfo] = location.hash.split('=');
    //    [id, name]
    const [categoryId, categoryName] = categoryInfo.split('-')

    headerCategoryTitle.innerHTML = categoryName; /* Cuando ingresamos a cualquier categoria de peliculas, el nombre de la categoria se mostrara en la parte superior de todas las peliculas pertenecientes a esa categoria*/

    getMoviesByCategory(categoryId); /* Esta funcion lo puedo encontrar en el archivo main.js */
}
function movieDetails() {
    console.log('Movie!!');

    /* Estas constantes las encuentras en nodes.js */
    headerSection.classList.add('header-container--long');/*Indicando que la clase "header-container--long" sea agregada */
    //headerSection.style.background = ''; /* Nos dirigimo a la etiqueta style a la propiedad "background" y agregamos una imagen en vacio*/
    arrowBtn.classList.remove('inactive');/* Removiendo la clase "inactive" a constante arrowBtn*/
    arrowBtn.classList.add('header-arrow--white'); /*Agregando la clase "header-arrow--white" a constante arrowBtn*/
    headerTitle.classList.add('inactive'); /*Agregando la clase "inactive" a constante headerTitle si es que ya lo tiene en el html*/
    headerCategoryTitle.classList.add('inactive') /*Agregando una clase "inactive" a constante headerCategoryTitle*/
    searchForm.classList.add('inactive'); /*Agregando la clase "inactive" a constante searForm*/

    trendingPreviewSection.classList.add('inactive') /*Agregando la clase "inactive" a constante trendingPreviewSection*/
    categoriesPreviewSection.classList.add('inactive') /*Agregando la clase "inactive" a constante categoriesPreviewSection*/
    genericSection.classList.add('inactive') /*Agregando una clase "inactive" a constante genericSection*/
    movieDetailSection.classList.remove('inactive')/*Removiendo una clase "inactive" a constante movieDetailSection*/

    /* Destructurando  el location.hash con el metodo split() para quedarnos solos con el "id de la pelicula*/
    const [_, movieId] = location.hash.split('=');
    getMovieById(movieId)
}
function searchPage() {
    console.log('search!!');

    /* Estas constantes las encuentras en nodes.js */
    headerSection.classList.remove('header-container--long');/*Indicando que la clase "header-container--long" sea removida */
    headerSection.style.background = ''; /* Nos dirigimo a la etiqueta style a la propiedad "background" y agregamos una imagen en vacio*/
    arrowBtn.classList.remove('inactive');/* Removiendo la clase "inactive" a constante arrowBtn*/
    arrowBtn.classList.remove('header-arrow--white'); /*Removiendo la clase "header-arrow--white" a constante arrowBtn*/
    headerTitle.classList.add('inactive'); /*Agregando la clase "inactive" a constante headerTitle si es que ya lo tiene en el html*/
    headerCategoryTitle.classList.add('inactive') /* A??adiendo una clase "inactive" a constante headerCategoryTitle para que cuando se busque la pelicula no aparesca en la parte superior que categoria de pelicula es.*/
    searchForm.classList.remove('inactive'); /*Removiendo la clase "inactive" a constante searForm*/

    trendingPreviewSection.classList.add('inactive') /*Agregando la clase "inactive" a constante trendingPreviewSection*/
    categoriesPreviewSection.classList.add('inactive') /*Agregando la clase "inactive" a constante categoriesPreviewSection*/
    genericSection.classList.remove('inactive') /*Removiendo una clase "inactive" a constante genericSection*/
    movieDetailSection.classList.add('inactive')/*Agregando una clase "inactive" a constante movieDetailSection*/

    /* Destructurando  el location.hash con el metodo split() para quedarnos solos con el "id" y el "nombre de la pelicula*/
    const [_, query] = location.hash.split('=');
    getMoviesBySearch(query) /*Esta funcion la encontraras en el documento main.js */
}
function trendsPage() {
    console.log('trends!!');

    /* Estas constantes las encuentras en nodes.js */
    headerSection.classList.remove('header-container--long');/*Indicando que la clase "header-container--long" sea removida */
    headerSection.style.background = ''; /* Nos dirigimo a la etiqueta style a la propiedad "background" y agregamos una imagen en vacio*/
    arrowBtn.classList.remove('inactive');/* Removiendo la clase "inactive" a constante arrowBtn*/
    arrowBtn.classList.remove('header-arrow--white'); /*Removiendo la clase "header-arrow--white" a constante arrowBtn*/
    headerTitle.classList.add('inactive'); /*Agregando la clase "inactive" a constante headerTitle si es que ya lo tiene en el html*/
    headerCategoryTitle.classList.remove('inactive') /* Removiendo una clase "inactive" a constante headerCategoryTitle*/
    searchForm.classList.add('inactive'); /*Agregando la clase "inactive" a constante searForm*/

    trendingPreviewSection.classList.add('inactive') /*Agregando la clase "inactive" a constante trendingPreviewSection*/
    categoriesPreviewSection.classList.add('inactive') /*Agregando la clase "inactive" a constante categoriesPreviewSection*/
    genericSection.classList.remove('inactive') /*Removiendo una clase "inactive" a constante genericSection*/
    movieDetailSection.classList.add('inactive')/*Agregando una clase "inactive" a constante movieDetailSection*/

    headerCategoryTitle.innerHTML = 'Tendencias'
    getTraidingMovies()
}