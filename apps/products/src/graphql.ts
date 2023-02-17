
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Product {
    _id: string;
    name?: Nullable<string>;
    price?: Nullable<number>;
}

export interface IQuery {
    getProducts(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
}

type Nullable<T> = T | null;
