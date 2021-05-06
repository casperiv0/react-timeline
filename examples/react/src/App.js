import React from "react";
import { Timeline, TimelineItem } from "react-timelinev2";

function App() {
  return (
    <div className="App">
      <Timeline>
        <TimelineItem side="left" title="hello world" date="2020">
          Some text
        </TimelineItem>
        <TimelineItem shadows hoverShadow side="left" title="hello world" date="2020">
          I will have shadows!
        </TimelineItem>
        <TimelineItem side="right" title="hello world" date="2020">
          Some text
        </TimelineItem>
        <TimelineItem side="right" title="hello world" date="2020">
          Some text
        </TimelineItem>
      </Timeline>

      <br />
      <h1 style={{ marginLeft: "2rem" }}>Another one!</h1>

      <Timeline>
        <TimelineItem
          bgColor="black"
          titleBg="#111111"
          titleColor="#f5f5f5"
          side="left"
          title="hello world"
          date="2020"
        >
          Some text
        </TimelineItem>
        <TimelineItem
          bgColor="black"
          titleBg="#111111"
          titleColor="#f5f5f5"
          shadows
          hoverShadow
          side="left"
          title="hello world"
          date="2020"
        >
          I will have shadows!
        </TimelineItem>
        <TimelineItem side="right" title="hello world" date="2020">
          Some text
        </TimelineItem>
        <TimelineItem side="right" title="hello world" date="2020">
          Some text
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default App;
