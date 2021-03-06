import Link from "next/link";
import styled from "styled-components";

const TimelineStyled = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 6px 24px;
`;

const TimelineHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  h3 {
    white-space: nowrap;
  }

  .line {
    margin-left: 8px;
    height: 1px;
    width: 100%;
    background-color: #000;
  }
`;

const TimelineItemStyled = styled.div`
  display: flex;
  /* margin-bottom: 18px; */

  .marker {
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      min-height: 12px;
      width: 12px;
      border-radius: 12px;
      background-color: #333;
    }

    .line {
      width: 1px;
      height: 100%;
      background-color: #000;

      &:first-child {
        height: 8px;
      }
    }
  }

  .content {
    margin-left: 16px;
    margin-bottom: 18px;

    h3 {
      margin-bottom: 4px;
    }

    span {
      display: block;
      margin-bottom: 4px;
      color: #444;
    }

    p {
      color: #777;
      margin-bottom: 6px;
    }

    a {
      color: #2f70e9;
      transition: color 0.2s ease;

      &:hover {
        color: #4b2fe9;
      }
    }
  }
`;

function TimelineHeader(props) {
  const { header } = props;

  return (
    <TimelineHeaderStyled>
      <h3>{header}</h3>
      <div className="line" />
    </TimelineHeaderStyled>
  );
}

function TimelineItem(props) {
  const { title, date, preview } = props;

  return (
    <TimelineItemStyled>
      <div className="marker">
        <div className="line" />
        <div className="icon" />
        <div className="line" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <span>{date}</span>
        <p>{preview}</p>
        <Link href={props.link}>Read More →</Link>
      </div>
    </TimelineItemStyled>
  );
}

export default function Timeline(props) {
  const { timeline } = props;

  return (
    <TimelineStyled>
      <TimelineHeader header={timeline.header} />
      {timeline.posts.map(
        (post, index) => post.show && <TimelineItem key={index} {...post} />
      )}
    </TimelineStyled>
  );
}
