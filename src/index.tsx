import * as React from "react";
import {
  TimelineDiv,
  TimelineItemDiv,
  TimelineItemHeaderP,
  TimelineItemHeaderH4,
  TimelineItemBodyDiv,
  TimelineItemHeaderDiv,
} from "./styles";

interface TimelineProps {
  timelineBg?: string;
}

interface TimelineItemProps {
  title: string;
  date: number;
  body: string;
  side: string;
  bodyTextColor?: string;
  bgColor?: string;
  dateColor?: string;
  titleBg?: string;
  titleColor?: string;
  borderRadius?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  timelineBg,
  children,
  ...rest
}) => {
  return (
    <TimelineDiv timelineBg={timelineBg} {...rest}>
      {children}
    </TimelineDiv>
  );
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  bgColor,
  side,
  borderRadius,
  bodyTextColor,
  dateColor,
  date,
  titleColor,
  titleBg,
  title,
  children,
  ...rest
}) => {
  return (
    <TimelineItemDiv bgColor={bgColor} className={side} {...rest}>
      <TimelineItemBodyDiv
        borderRadius={borderRadius}
        bodyTextColor={bodyTextColor}
        bgColor={bgColor}
      >
        <TimelineItemHeaderDiv>
          <TimelineItemHeaderP dateColor={dateColor}>
            {date}
          </TimelineItemHeaderP>
          <TimelineItemHeaderH4 titleColor={titleColor} titleBg={titleBg}>
            {title}
          </TimelineItemHeaderH4>
        </TimelineItemHeaderDiv>
        {children}
      </TimelineItemBodyDiv>
    </TimelineItemDiv>
  );
};
