import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { BASE_QUERY } from '@store/models';

export const authApi = createApi({
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    createUser: builder.mutation({
      query(data) {
        return { url: 'registration', method: 'POST', body: data };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: data,
        };
      },
    }),
    getCurrentUser: builder.mutation({
      query: () => {
        return {
          url: 'auth/profile',
          method: 'GET',
        };
      },
    }),
    updateUser: builder.mutation({
      query({ id, data }) {
        return {
          url: `update/user/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
    removeUser: builder.mutation({
      query({ id }) {
        return {
          url: `auth/remove/${id}`,
          method: 'DELETE',
        };
      },
    }),
    updateLikes: builder.mutation({
      query({ id, data }) {
        return {
          url: `update/likes/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetCurrentUserMutation,
  useUpdateUserMutation,
  useRemoveUserMutation,
  useUpdateLikesMutation,
} = authApi;
