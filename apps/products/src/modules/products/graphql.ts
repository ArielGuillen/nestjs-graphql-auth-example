
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class IProduct {
    name: string;
    price: number;
}

export class Product {
    _id: string;
    name?: Nullable<string>;
    price?: Nullable<number>;
}

export abstract class IQuery {
    abstract getProducts(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
}

type Nullable<T> = T | null;
