export interface ISearchResult {
    id: string;
    name: string;
}

export class SearchResult implements ISearchResult{
    id: string;
    name: string;
    constructor(object?: any) {
        this.id = object.ndbno || '';
        this.name = object.name || '';
    }
}



