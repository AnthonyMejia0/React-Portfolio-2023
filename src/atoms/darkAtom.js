import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const darkState = atom({
  key: "darkState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
