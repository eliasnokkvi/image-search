/** I created types for the properties i needed/was interested in */

export interface ISearchResult {
  kind: string;
  queries: ISearchResultQuery;
  items: Array<ISearchResultItem>;
}

export interface ISearchResultQuery {
  request: Array<ISearchQueryPage>;
  nextPage?: Array<ISearchQueryPage>;
}

export interface ISearchQueryPage {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
}

export interface ISearchResultPage {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
}

export interface ISearchResultItem {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  mime: string;
  fileFormat: string;
  image: ISearchResultImage;
}

export interface ISearchResultImage {
  contextLink: string;
  height: number;
  width: number;
  byteSize: number;
  thumbnailLink: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
}
