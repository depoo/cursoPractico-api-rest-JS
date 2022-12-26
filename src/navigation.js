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
}

function homePage() {
    console.log('Home!!');

    getTraidingMoviesPreview()
    getCategoriesPreview()
}
function categoriesPage() {
    console.log('Categories!!');
}
function movieDetails() {
    console.log('Movie!!');
}
function searchPage() {
    console.log('search!!');
}
function trendsPage() {
    console.log('trends!!');
}