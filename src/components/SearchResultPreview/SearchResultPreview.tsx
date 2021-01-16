import React from "react";
import { ISearchResultItem } from "../../types";
import {
  CloseIcon,
  Container,
  PreviewContainer,
  PreviewContentContainer,
  PreviewImage,
  PreviewImageWrapper,
  PreviewLink,
  PreviewLinkImage,
  PreviewTitle,
} from "./SearchResultPreview.styles";

interface Props {
  item: ISearchResultItem | null;
  closePreview: () => void;
}

export const SearchResultPreview: React.FC<Props> = ({
  item,
  closePreview,
}) => {
  if (!item) {
    return null;
  }

  const openLink = () => {
    window.open(item.image.contextLink);
  };

  return (
    <Container>
      <PreviewContainer>
        <PreviewImageWrapper>
          <PreviewImage
            alt={item.link}
            src={item.link}
            onClick={openLink}
            onError={() => (item.link = "/placeholder.png")}
          />
          <CloseIcon onClick={closePreview} />
        </PreviewImageWrapper>
        <PreviewContentContainer>
          <PreviewLink onClick={openLink}>
            <PreviewLinkImage />
            <span>{item.displayLink}</span>
          </PreviewLink>
          <PreviewTitle onClick={openLink}>{item.title}</PreviewTitle>
        </PreviewContentContainer>
      </PreviewContainer>
    </Container>
  );
};
