import React from "react";
import { ISearchResultItem } from "../../types";
import {
  ResultImage,
  ResultItem,
  ResultTitle,
  ResultWebsite,
} from "./SearchResultItem.styles";

interface IProps {
  searchResultItem: ISearchResultItem;
  onImageClick: (item: ISearchResultItem) => void;
}

export const SearchResultItem: React.FC<IProps> = ({
  searchResultItem,
  onImageClick,
}) => {
  return (
    <ResultItem>
      <ResultImage
        alt={searchResultItem.title}
        src={searchResultItem.link}
        onClick={() => onImageClick(searchResultItem)}
        onError={() => (searchResultItem.link = "/placeholder.png")}
      />
      <ResultTitle>{searchResultItem.title}</ResultTitle>
      <ResultWebsite
        onClick={() => window.open(searchResultItem.image.contextLink)}
      >
        {searchResultItem.displayLink}
      </ResultWebsite>
    </ResultItem>
  );
};
