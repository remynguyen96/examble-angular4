export interface Author {
    _id: string;
    name: string;
    avatar: string;
}
export interface PostInterface {
    _id: string;
    title: string;
    slug: string;
    description: string;
    categories: string[];
    images: string;
    author: Author;
}

export class Post implements PostInterface {
    _id: string;
    title: string;
    slug: string;
    description: string;
    categories: string[];
    images: string;
    author: Author;
    constructor(object?: any) {
        this._id = object._id || '';
        this.title = object.title || '';
        this.slug = object.slug || '';
        this.description = object.description || '';
        this.categories = object.categories || [];
        this.images = object.images || '';
        this.author = object.author || null;
    }
}
