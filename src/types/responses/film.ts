import { Country, Genre } from './filters'

export interface FilmData {
    total: number;
    totalPages: number;
    items: Film[];
}

export interface Film {
    kinopoiskId: number;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    year: number;
    ratingKinopoisk: number;
    posterUrl: string;
    posterUrlPreview: string;
    countries: Pick<Country, 'country'>[];
    genres: Pick<Genre, 'genre'>[];
}