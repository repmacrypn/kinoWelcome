import React from 'react'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { filmsAPI } from 'services/api'
import { Film, FilmData } from 'types/responses/film'

export const OverviewPage = () => {
    /* const [genre, setGenre] = React.useState('') */
    const { data: filters } = useQuery({
        queryKey: ['filters'],
        queryFn: filmsAPI.fetchFilters,
        staleTime: Infinity,
    })

    console.log(filters)

    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['films'],
        queryFn: filmsAPI.fetchTopFilms,
        getNextPageParam: (lastPage: FilmData, pages: FilmData[]) => {
            return pages.length !== lastPage.totalPages ? pages.length + 1 : false
        },
        staleTime: Infinity,
    })

    const filmsResult = data?.pages.map((group, i) => (
        <React.Fragment key={i}>
            {group.items.map((film: Film) => (
                <p key={film.kinopoiskId}>{film.nameRu}</p>
            ))}
        </React.Fragment>
    ))


    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <div>

            </div>
            <div>
                {filmsResult}
            </div>
            <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
            >
                {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                        ? 'Load More'
                        : 'Nothing more to load'}
            </button>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </div>
    )
}