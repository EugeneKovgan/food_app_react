import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { BASE_QUERY } from '@store/models';

export const couriersApi = createApi({
  reducerPath: 'couriers',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getAllCouriers: builder.query({
      query: params => {
        return {
          url: '/couriers',
          params,
        };
      },
    }),
  }),
});

export const { useGetAllCouriersQuery } = couriersApi;
