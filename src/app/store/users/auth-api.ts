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
    getCurrentUser: builder.query({
      query: () => {
        return {
          url: 'auth/profile',
          method: 'GET',
        };
      },
    }),
    updateUser: builder.mutation({
      query(data) {
        return {
          url: `auth/profile`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    updateLikes: builder.mutation({
      query(data) {
        return {
          url: `auth/profile/likes`,
          method: 'PUT',
          body: data,
        };
      },
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useUpdateLikesMutation,
} = authApi;
