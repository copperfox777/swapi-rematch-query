import axios, { AxiosPromise } from "axios";
import { PeopleModel } from "store/people";

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
});

export type IGetPeople = {
  count: number;
  next: string;
  previous: null | string;
  results: PeopleModel[];
};

export type IPerson = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
};

export const getPeople = (page: number): Promise<AxiosPromise<IGetPeople>> =>
  axiosInstance.get(`/people/?page=${page}`);

//used with React-Query
export const getPeopleById = (id: number): Promise<IPerson> =>
  axiosInstance.get(`/people/${id}`).then((response) => response.data);

export const getPlanets = (): Promise<AxiosPromise> =>
  axiosInstance.get("/planets");
export const getPlanetById = (id: number): Promise<AxiosPromise> =>
  axiosInstance.get(`/people/${id}`);

const api = {
  getPeople,
  getPeopleById,
  getPlanets,
  getPlanetById,
};
export default api;
