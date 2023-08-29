export interface Filters {
    genres: Genre[];
    countries: Country[];
}

export interface Genre {
    id: number;
    genre: string;
}

export interface Country {
    id: number;
    country: string;
}
