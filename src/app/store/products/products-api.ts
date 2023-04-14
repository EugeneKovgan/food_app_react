import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { BASE_QUERY } from '@store/models';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getProducts: builder.query<any, void>({
      query(data) {
        return {
          url: '/products',
          method: 'GET',
          body: data,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
