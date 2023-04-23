import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { BASE_QUERY } from '@store/models';

export const orderApi = createApi({
  reducerPath: 'order',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    CreateOrder: builder.mutation({
      query({ id, data }) {
        return {
          url: `order/create/${id}`,
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
