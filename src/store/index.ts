import { init, RematchDispatch, RematchRootState, Models } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import immerPlugin from "@rematch/immer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { people } from "./people";

export interface RootModel extends Models<RootModel> {
  people: typeof people;
}

export const models: RootModel = { people };

type FullModel = ExtraModelsFromLoading<RootModel, { type: "full" }>;
export const store = init<RootModel, FullModel>({
  models,
  plugins: [
    loadingPlugin({ type: "full" }),
    immerPlugin({
      whitelist: ["people"],
    }),
  ],
});

export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
