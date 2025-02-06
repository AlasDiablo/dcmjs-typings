import {Dict} from "./DicomDict";

export function getTagsNameToEmpty(): string[];

export function cleanTags(dict: Dict, tagNamesToReplace?: Record<string, string>, customTagNamesToEmpty?: string[]): void;
