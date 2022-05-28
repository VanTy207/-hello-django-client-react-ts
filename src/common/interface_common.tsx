import * as React from 'react';

export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

type ApiResponse = Record<string, any>

export interface APIResponseBase<T = any,> extends ApiResponse {
    data: T;
    result?: number;
    message?: string;
}

export interface FieldOnChangeBase extends React.ChangeEvent<HTMLInputElement>{
    
}