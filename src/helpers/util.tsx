import { Action } from "../common/interface_common";

export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
    return { type, payload };
}

export function forceCast<T>(input: any): T {
    return input;
}

export type StringOrNumber = number | string;

export function parseToString(v: StringOrNumber) {
    return (v === null || v === undefined) ? '' : `${v}`;
}

export function parseToNumber(v: StringOrNumber) {
    return (v === null || v === undefined) ? -1 : Number(v);
}

export function parseToBoolean(v: StringOrNumber) {
    return (v === null || v === undefined) ? false : `${v}` === 'true';
}
