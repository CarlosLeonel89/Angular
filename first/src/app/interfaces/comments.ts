export interface CommentsResult {
data: Comment[];
meta: Meta;
page: number;
}

export interface Meta {
page: number;
}

export interface Comment {
comments_id: number;
posts_id: number;
name: string;
body: string;
}
