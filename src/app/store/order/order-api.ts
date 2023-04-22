import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { BASE_QUERY } from '@store/models';

export const orderApi = createApi({
  reducerPath: 'order',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    CreateOrder: builder.mutation({
      query({ id, data }) {
        return {
          url: `order/create${id}`,
          method: 'POST',
          body: data,
        };
      },
    }),
    getOrder: builder.query({
      query: ({ id }) => ({
        url: `order/get${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderQuery } = orderApi;
