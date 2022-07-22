export interface PostResult {
    data: Post[];
    meta: Meta;
}

export interface Meta {
    page: number;
}

export interface Post {
    posts_id: number;
    title: string;
    name: string;
    body: string;
    date: string;
    category: string;
}