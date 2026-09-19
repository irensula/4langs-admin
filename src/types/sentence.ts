export interface Sentence {
    content_id: number;
    slug: string;
    image_path: string;
    category_id: number,
    created_at: string;
    updated_at: string;
    category: string;
    language: string;
    value: string;
    answer_value: string;
    sound_path: string;
}