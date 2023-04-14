import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { BASE_QUERY } from '@store/models';

export const couriersApi = createApi({
  reducerPath: 'couriers',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getAllCouriers: builder.query<any, void>({
      query(data) {
        return {
          url: '/couriers',
          method: 'GET',
          body: data,
        };
      },
    }),
  }),
});

export const { useGetAllCouriersQuery } = couriersApi;
