import * as React from "react";
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
export declare const Timeline: React.FC<TimelineProps>;
export declare const TimelineItem: React.FC<TimelineItemProps>;
export {};
