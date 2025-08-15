import { atom } from "jotai";

export type CursorType = "default" | "project" | "none";

export const cursorTypeAtom = atom<CursorType>("none");
export const cursorTextAtom = atom<string>("");
