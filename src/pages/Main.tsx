import React, { useState } from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Navbar } from "../components/Navbar/Navbar";
import { SearchResultList } from "../components/SearchResultList/SearchResultList";
import { ISearchResult, ISearchResultItem } from "../types";
import axios from "axios";
import { LoadingSpinner } from "../components/LoadingSpinner";

const apiKey = "AIzaSyCefJfjoi6Qx4o9UL7ruz8gaQ_MH71e7Ck";

const fetchSearchResults = async (searchValue: string, searchIndex: number) => {
  const { data } = await axios.get<ISearchResult>(
    `https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q=${searchValue}&start=${searchIndex}&searchType=image&key=${apiKey}`
  );

  return data;
};

export const Main: React.FC = () => {
  const [searchResults, setSearchResults] = useState<ISearchResultItem[]>([]);
  const [searchIndex, setSearchIndex] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const submitSearch = async (searchValue: string) => {
    setIsLoading(true);
    const searchResults = await fetchSearchResults(searchValue, 1);

    if (searchResults.items) {
      setSearchResults(searchResults.items);

      const totalResults = +searchResults.queries.request[0].totalResults;
      setTotalResults(totalResults);
    }

    /** risky to index without checking if length of nextPage array exists,
     * but haven't looked too much into the api docs for this. I assume that nextPage is an optional property instead. */
    if (searchResults.queries.nextPage) {
      setSearchIndex(searchResults.queries.nextPage[0].startIndex);
    }
    setIsLoading(false);
  };

  const requestMore = async () => {
    const moreSearchResults = await fetchSearchResults(
      searchValue,
      searchIndex
    );

    if (moreSearchResults.items) {
      setSearchResults([...searchResults, ...moreSearchResults.items]);

      if (moreSearchResults.queries.nextPage) {
        setSearchIndex(moreSearchResults.queries.nextPage[0].startIndex);
      }
    }
  };

  return (
    <React.Fragment>
      <Navbar
        submitSearch={(searchValue: string) => submitSearch(searchValue)}
        setSearchValue={(searchValue: string) => setSearchValue(searchValue)}
        searchValue={searchValue}
      />

      <ContentContainer>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <SearchResultList
            searchResults={searchResults}
            requestMore={() => requestMore()}
            totalResults={totalResults}
          />
        )}
      </ContentContainer>
    </React.Fragment>
  );
};
