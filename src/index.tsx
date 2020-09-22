import * as React from "react";
import {
  TimelineDiv,
  TimelineItemBodyDiv,
  TimelineItemDiv,
  TimelineItemHeaderDiv,
  TimelineItemHeaderH4,
  TimelineItemHeaderP,
} from "./styles";

interface TimelineProps {
  timelineBg?: string;
}

interface TimelineItemProps {
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
  shadows,
  hoverShadow,
  children,
  ...rest
}) => {
  return (
    <TimelineItemDiv bgColor={bgColor} className={side} {...rest}>
      <TimelineItemBodyDiv
        shadows={shadows}
        hoverShadow={hoverShadow}
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
