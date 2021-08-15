import styled, { css } from "styled-components";
import { TimelineProps } from "./index.js";

export const TimelineDiv = styled.div<TimelineProps>`
  padding: 0;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 6px;
    background: ${(props) => props.timelineBg};
    left: 50%;
    margin-left: -3px;
  }

  @media (max-width: 768px) {
    &::after {
      left: 31px;
    }
  }
`;

export const TimelineItemDiv = styled.div<{ bgColor?: string }>`
  padding: 10px 40px;
  position: relative;
  width: 50%;

  &::after {
    z-index: 10;
    content: "";
    position: absolute;
    top: 50%;
    right: -13px;
    width: 25px;
    height: 25px;
    background: ${(props) => props.bgColor};
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &.left {
    left: 0;
  }

  &.right {
    left: 50%;
  }

  &.right::after {
    left: -12px;
  }

  &.left::before {
    content: "";
    height: 0px;
    width: 0px;
    position: absolute;
    top: 50%;
    right: 30px;
    border: 10px solid ${(props) => props.bgColor};
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent ${(props) => props.bgColor};
    transform: translateY(-50%);
  }

  &.right::before {
    content: "";
    height: 0px;
    width: 0px;
    position: absolute;
    top: 50%;
    left: 30px;
    border: 10px solid ${(props) => props.bgColor};
    border-width: 10px 10px 10px 0;
    border-color: transparent ${(props) => props.bgColor} transparent transparent;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &::before {
      left: 60px;
      border-width: 10px 10px 10px 0;
      border-color: transparent ${(props) => props.bgColor} transparent transparent;
    }

    &.left::after,
    &.right::after {
      left: 19px;
      z-index: 10;
    }

    &.right {
      left: 0;
    }

    &.left::before {
      left: 60px;
      border-width: 10px 10px 10px 0;
      border-color: transparent ${(props) => props.bgColor} transparent transparent;
    }

    &.right::before {
      left: 60px;
    }
  }
`;

export const TimelineItemBodyDiv = styled.div<{
  bgColor?: string;
  borderRadius?: string;
  bodyTextColor?: string;
  shadows?: boolean;
  hoverShadow?: boolean;
}>`
  padding: 15px;
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.bodyTextColor};
  transition: box-shadow 200ms;

  ${(props) =>
    props.shadows &&
    css`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    `}

  ${(props) =>
    props.hoverShadow &&
    css`
      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    `}
`;

export const TimelineItemHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  color: white;
`;

export const TimelineItemHeaderP = styled.p<{ dateColor?: string }>`
  color: ${(props) => props.dateColor};
  font-weight: bold;
`;

export const TimelineItemHeaderH4 = styled.h4<{
  titleColor?: string;
  titleBg?: string;
}>`
  color: ${(props) => props.titleColor};
  background-color: ${(props) => props.titleBg};
  padding: 5px;
`;
