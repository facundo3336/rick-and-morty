export interface Character {
    id: number
    title: string
    status: "Alive" | "Dead" | "unknown"
    species: string
    origin: {
        name: string
    }
    location: {
        name: string
    }
    image: string
}

export interface InfoResponse {
    count: number
    pages: number
    next: string | null 
    prev: string | null 
}

 export interface CharacterResponse {
    results: Character[]
    info: InfoResponse
 }