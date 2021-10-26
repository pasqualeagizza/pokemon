export interface IPokemon {
    id: number,
    name: string,
    weight: number,
    height: number,
    sprites: Isprites
}

export interface Isprites {
    front_default: string,
}