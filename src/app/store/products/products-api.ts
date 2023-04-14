import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { BASE_QUERY } from '@store/models';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getProducts: builder.query({
      query: params => ({
        url: 'products',
        params,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
