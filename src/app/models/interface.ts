export interface IPokemon {
    id: number,
    name: string,
    weight: number,
    height: number,
    sprites: Isprites,
    stats: Istats,
    stat: Istat,

}

export interface Isprites {
    front_default: string,
}

export interface Istats {
    base_stat: number,
    effort: number,
}

export interface Istat {
    name: string,
    url: string
}