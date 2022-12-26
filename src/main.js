/* Axios permite crear la configurar la configuracion por defecto que trabajare el resto del proyecto*/
const apiAxios= axios.create({
    baseURL: 'https://api.themoviedb.org/3/', /* Se crea una basURL con la url de la api */
    Headers:{
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': apiKey, /* Se crea objeto params con la llave(api_key) y con valor "apiKey" que hace referencia a la API KEY que esta en otro documento js*/
    }
});

async function getTraidingMoviesPreview() {
    const {data} = await apiAxios('trending/movie/day'); // traendo la apiKey desde otro archivo js, y hago una destructuracion con data para no hacer un res.json

    const movies = data.results;
    movies.forEach(movie => {
        const trendingMoviesPreviewList = document.querySelector('#trendingPreview .trendingPreview-movieList') // selecionando el id "trendingPreview" y la clase "trendingPreview-movieList" que esta en html

        const movieContainer = document.createElement('div'); //creando una etiqueta div
        movieContainer.classList.add('movie-container'); // creando una clase "movie-container" para la etiqueta div(movieContainer)

        const movieImg = document.createElement('img') // creando una etiqueta img
        movieImg.classList.add('movie-img') // creando una clase "movie-img" para la etiqueta img(movieImg)
        movieImg.setAttribute('alt', movie.title) // creando un atributo "alt" para la etiqueta img con el titulo de la pelicula que estamos traendo desde la API
        movieImg.setAttribute(
        'src',
        'https://image.tmdb.org/t/p/w300'+ movie.poster_path
        ); // creando un atributo "src" para la etiqueta img con image que tengan un ancho de 300 px que estamos traendo desde la API

        movieContainer.appendChild(movieImg); //movieImg ahora estara dentro de movieContainer
        trendingMoviesPreviewList.appendChild(movieContainer) //movieContainer ahora estara dentro de trendingMoviesPreviewList
    });
}

async function getCategoriesPreview() {
  const { data } = await apiAxios('genre/movie/list'); // traendo la apiKey desde otro archivo js pero traendo las categorias de cada pelicula

  const categories = data.genres;
  categories.forEach(category => {
      const categoriesPreviewList = document.querySelector('#categoriesPreview .categoriesPreview-list') // selecionando el id "categoriesPreview" y la clase "categoriesPreview-list" que esta en html

      const categoryContainer = document.createElement('div'); //creando una etiqueta div
      categoryContainer.classList.add('category-container'); // creando una clase "categorie-container" para la etiqueta div(movieContainer)

      const categoryTitle = document.createElement('h3') // creando una etiqueta h3
      categoryTitle.classList.add('category-title') // creando una clase "category-title" para la etiqueta h3(categoryTitle)
      categoryTitle.setAttribute('id', 'id' + category.id) // creando un atributo "id" para la etiqueta h3 con el nombre de la categoria de la pelicula que estamos traendo desde la API
      const categoryTitleText = document.createTextNode(category.name); //creando una variable que trae el nombre de que categoria pertenece cada pelicula

      categoryTitle.appendChild(categoryTitleText); //categoryTitleText ahora estara dentro de categoryTitle
      categoryContainer.appendChild(categoryTitle);//categoryTitle ahora estara dentro de categoryContainer
      categoriesPreviewList.appendChild(categoryContainer);//categoryContainer ahora estara dentro de categoriesPreviewList
  });
}