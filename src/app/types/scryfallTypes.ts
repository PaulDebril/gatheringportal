export interface ScryfallResponse {
    object: string
    data?: ScryfallCard[]
    details?: string
  }
  
  export interface ScryfallCard {
    id: string
    name: string
    image_uris?: {
      small?: string
      normal?: string
      large?: string
      png?: string
      art_crop?: string
      border_crop?: string
    }
    card_faces?: {
      image_uris?: {
        small?: string
        normal?: string
        large?: string
        png?: string
        art_crop?: string
        border_crop?: string
      }
    }[]
  }
  
  export interface ScryfallCardDetail {
    id: string
    name: string
    mana_cost?: string
    type_line?: string
    oracle_text?: string
    set_name?: string
    rarity?: string
    artist?: string
    flavor_text?: string
    power?: string
    toughness?: string
    image_uris?: {
      small?: string
      normal?: string
      large?: string
      png?: string
      art_crop?: string
      border_crop?: string
    }
    card_faces?: {
      image_uris?: {
        small?: string
        normal?: string
        large?: string
        png?: string
        art_crop?: string
        border_crop?: string
      }
    }[]
  }