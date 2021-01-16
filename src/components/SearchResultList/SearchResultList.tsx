import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import { ISearchResultItem } from "../../types";
import { SearchResultItem } from "../SearchResultItem/SearchResultItem";
import { SearchResultPreview } from "../SearchResultPreview/SearchResultPreview";

const SearchResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;

  margin-top: 4px;
`;

interface Props {
  searchResults: Array<ISearchResultItem>;
  requestMore: () => void;
  totalResults: number;
}

export const SearchResultList: React.FC<Props> = ({
  searchResults,
  requestMore,
  totalResults,
}) => {
  const [visibleResults, setVisibleResults] = useState<ISearchResultItem[]>([]);
  const [previewItem, setPreviewItem] = useState<ISearchResultItem | null>(
    null
  );

  useEffect(() => {
    setVisibleResults(searchResults);
  }, [searchResults]);

  return (
    <React.Fragment>
      <InfiniteScroll
        dataLength={visibleResults.length}
        next={requestMore}
        hasMore={visibleResults.length < totalResults}
        loader={<BeatLoader />}
        scrollableTarget="body"
      >
        <SearchResultsContainer>
          {visibleResults.map((item) => (
            <SearchResultItem
              searchResultItem={item}
              key={item.link}
              onImageClick={(item: ISearchResultItem) => setPreviewItem(item)}
            />
          ))}
        </SearchResultsContainer>
      </InfiniteScroll>
      <SearchResultPreview
        item={previewItem}
        closePreview={() => setPreviewItem(null)}
      />
    </React.Fragment>
  );
};
