import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { filmsAPI } from 'services/api'
import { Film, FilmData } from 'types/responses/film'

export const OverviewPage = () => {
    const [genre, setGenre] = React.useState<'' | number>('')

    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['films', genre],
        queryFn: ({ pageParam = { curPage: 1, genre } }) => filmsAPI.fetchTopFilms(pageParam),
        getNextPageParam: (lastPage: FilmData, pages: FilmData[]) => {
            return pages.length !== lastPage.totalPages ? { genre, curPage: pages.length + 1 } : false
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
            <button onClick={() => setGenre('')}>
                all
            </button>
            <button onClick={() => setGenre(11)}>
                action
            </button>
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