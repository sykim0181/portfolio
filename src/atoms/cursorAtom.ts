import { atom } from "jotai";
import { Position } from "@/types/common";

export type CursorType = "default" | "project" | "none";

export const cursorPositionAtom = atom<Position | null>(null);

export const cursorTypeAtom = atom<CursorType>("none");

export const cursorTextAtom = atom<string>("");
