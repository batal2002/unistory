import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IdParams, IMetaPages, IUser, IUsers} from "../models/IUser";


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://new-backend.unistory.app/api/data/'}),
    endpoints: (builder) => ({
        fetchAllUsers: builder.query<IUsers, IMetaPages>({
            query: ({perPage = 20, currentPage = 0}) => ({
                url: '',
                params: {
                    perPage,
                    page: currentPage
                }
            })
        }),
        fetchUser: builder.query<IUser, string | undefined>({
            query: (id) => ({
                url: `id/${id}`,
            })
        }),
    }),
})