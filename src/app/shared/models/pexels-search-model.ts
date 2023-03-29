import { PhotoModel } from "./photo-model"

export interface PexelsSearchModel {
    page: number,
    per_page: number,
    photos: PhotoModel[],
    total_results: number,
    next_page: string
}