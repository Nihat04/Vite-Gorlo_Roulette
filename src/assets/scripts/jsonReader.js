export default class jsonReader {
    static path = '/db/nihat_nastya.json';

    static getMovies = async () => {
        if(!this.path) throw new Error('path is empty');

        const response = await fetch(this.path);
        const result = await response.json();
        return result.movies;
    }

    static writeMovies(movies) {

    }
}