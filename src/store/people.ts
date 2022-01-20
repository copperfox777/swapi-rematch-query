import { createModel } from "@rematch/core";
import type { RootModel } from "./index";
import * as api from "api";
import { IGetPeople } from "api";

export interface PeopleModel {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: {
    created: string;
  };
  edited: string;
  url: string;
}

type PeopleState = {
  list: PeopleModel[];
  count: number;
};

export const people = createModel<RootModel>()({
  state: { list: [], count: 0 } as PeopleState,
  reducers: {
    PUT(state: PeopleState, payload: { data: IGetPeople }) {
      state.list = payload.data.results;
      state.count = payload.data.count;
    },
  },
  effects: (dispatch) => ({
    async getPeople(page: number) {
      let response = await api.getPeople(page);
      dispatch.people.PUT(response);
    },
  }),
});
