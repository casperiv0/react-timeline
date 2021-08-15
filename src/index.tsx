import * as React from "react";
import {
  TimelineDiv,
  TimelineItemBodyDiv,
  TimelineItemDiv,
  TimelineItemHeaderDiv,
  TimelineItemHeaderH4,
  TimelineItemHeaderP,
} from "./styles.js";

export interface TimelineProps {
  timelineBg?: string;
}

export interface TimelineItemProps {
  title: string;
  date: number | string;
  side: "left" | "right";
  bodyTextColor?: string;
  bgColor?: string;
  dateColor?: string;
  titleBg?: string;
  titleColor?: string;
  borderRadius?: string;
  shadows?: boolean;
  hoverShadow?: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ timelineBg, children, ...rest }) => {
  return (
    <TimelineDiv timelineBg={timelineBg} {...rest}>
      {children}
    </TimelineDiv>
  );
};

export const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  return (
    <TimelineItemDiv bgColor={props.bgColor} className={props.side} {...props}>
      <TimelineItemBodyDiv
        shadows={props.shadows}
        hoverShadow={props.hoverShadow}
        borderRadius={props.borderRadius}
        bodyTextColor={props.bodyTextColor}
        bgColor={props.bgColor}
      >
        <TimelineItemHeaderDiv>
          <TimelineItemHeaderP dateColor={props.dateColor}>{props.date}</TimelineItemHeaderP>
          <TimelineItemHeaderH4 titleColor={props.titleColor} titleBg={props.titleBg}>
            {props.title}
          </TimelineItemHeaderH4>
        </TimelineItemHeaderDiv>
        {props.children}
      </TimelineItemBodyDiv>
    </TimelineItemDiv>
  );
};

Timeline.defaultProps = {
  timelineBg: "#44465c",
};

TimelineItem.defaultProps = {
  bgColor: "#232535",
  borderRadius: "6px",
  bodyTextColor: "#fff",
  dateColor: "#848892",
  titleBg: "#44465c",
  titleColor: "#fff",
};
