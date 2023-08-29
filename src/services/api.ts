import axios, { AxiosResponse } from 'axios'
import { FilmData } from 'types/responses/film'
import { Filters } from 'types/responses/filters'

export const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/'
export const X_API_KEY = 'e1d1a25c-3565-4a4b-8642-b0d1494c7689'

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'X-API-KEY': 'e1d1a25c-3565-4a4b-8642-b0d1494c7689',
        'Content-Type': 'application/json',
    },
})

export const filmsAPI = {
    async fetchTopFilms({ pageParam = 1, genre = '' }): Promise<FilmData> {
        const response: AxiosResponse<FilmData> = await instance.get<FilmData>(`films?page=${pageParam}&genres=${genre}`)
        return response.data
    },
    async fetchFilters(): Promise<Filters> {
        const response: AxiosResponse<Filters> = await instance.get<Filters>('films/filters')
        return response.data
    },
    /* async fetchAssetHistory(id: string, historyInterval: string) {
        const response = await instance.get<AssetHistoryResponse>(`assets/${id}/history?interval=${historyInterval}`)
        return response.data.data
    }, */
}