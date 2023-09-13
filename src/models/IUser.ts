export interface IUser {
    address: string;
    email: string;
    id: number | null | string;
    username: string;
}
export interface IMeta {
    currentPage: number;
    perPage: number;
    totalPages: number;
}
export interface IMetaPages {
    currentPage: number;
    perPage: number;
}

export interface IUsers {
    items: IUser[]
    meta: IMeta
}

export type IdParams = {
    id: string;
};