import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from './userModel';

// Define a service using a base URL and expected endpoints
const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://react-rtk-query-mutation-api.vercel.app/',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
      providesTags: ['Users'],
      transformResponse: (users: User[]) =>
        users.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        ),
    }),
    addUser: builder.mutation<User, Omit<User, 'id'>>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation<User, User>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, User>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

// Export auto-generated hooks based on the defined endpoints
export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export default userApi;
