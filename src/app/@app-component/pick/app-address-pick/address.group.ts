
export interface AreaPick {
    id: string,
    name: string,
}

export interface AddressPick {
    id: string,
    area: AreaPick,
    number: string,
    letter: string,
    hasHydrometer: boolean,
}

export interface Groups<T>{
    name: string,
    values: T[],
}


