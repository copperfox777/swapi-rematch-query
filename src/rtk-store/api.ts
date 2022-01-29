import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PeopleModel } from "rematch-store/people";

interface ListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Define a service using a base URL and expected endpoints
export const swApi = createApi({
  reducerPath: "personsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  tagTypes: ["Persons"],
  endpoints: (build) => ({
    getAllPersonsPageN: build.query<ListResponse<PeopleModel>, number>({
      query: (page = 1) => ({ url: `people/?page=${page}` }),

      providesTags: (data, error, page) => {
        return data
          ? [
              ...data.results.map(({ name }) => ({
                type: "Persons" as const,
                name,
              })),
              { type: "Persons", id: "PARTIAL-LIST" },
            ]
          : [{ type: "Persons", id: "PARTIAL-LIST" }];
      },
    }),
  }),
});

export const { useGetAllPersonsPageNQuery } = swApi;
