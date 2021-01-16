import styled from "styled-components";
import { Earth } from "@styled-icons/ionicons-outline/Earth";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

export const Container = styled.div`
  width: 40%;
  height: 100vh;
  position: relative;
  background-color: #141518;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  color: white;

  padding: 16px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 400px;

  cursor: pointer;
`;

export const PreviewImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`;

export const PreviewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid white;
  margin-top: 16px;
  padding: 16px 0;
`;

export const PreviewTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const PreviewLink = styled.a`
  padding: 8px;

  border: 1px solid white;
  border-radius: 32px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const PreviewLinkImage = styled(Earth)`
  width: 20px;
  height: 20px;
  margin-right: 6px;

  cursor: pointer;
`;

export const CloseIcon = styled(CloseOutline)`
  width: 22px;
  height: 22px;
  background: #dfe1e5;

  padding: 4px;
  border-radius: 45%;

  position: absolute;
  top: 0;
  left: 0;

  :hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
    transition: transform 0.2s ease-in-out;
  }
`;
