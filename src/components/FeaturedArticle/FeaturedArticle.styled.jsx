import styled from "styled-components";

export const FeaturedArticleSection = styled.section`
  position: relative;
`;

export const FeaturedArticleParent = styled.div`
  display: flex;
  transition-property: transform;
  transition-duration: 500ms, 0ms;
  transition-delay: 0ms, 0ms;
`;

export const Slides = styled.div`
  flex: 0 0 100%;
  column-gap: 30px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$chunkSize}, 1fr);

  > * {
    flex: 1;
  }
`;

export const SliderNavigation = styled.ul`
  width: 100%;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 3;

  li {
    list-style: none;
    button {
      border: none;
      border-radius: 50%;
      padding-inline: 10px;
      padding-block: 8px;
      margin: 20px;
      cursor: pointer;
      transition-property: all;
      transition-duration: 333ms, 0ms;
      transition-delay: 0ms, 0ms;
      &:hover {
        background-color: #e1e1e1;
      }
    }
  }
  li:nth-child(1) {
    margin-left: -40px;
  }
  li:nth-child(2) {
    margin-right: -40px;
  }
`;

export const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  margin-top: 30px;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 2px;
  a {
    color: white;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: #48494a;
    width: 100%;
    height: 2px;
    bottom: 0;
  }
`;
