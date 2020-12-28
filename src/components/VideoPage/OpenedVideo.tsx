import React from 'react';
import styled from 'styled-components';

const OpenedVideoWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: ${() =>
    window.pageYOffset}px;
  left: 0;
  z-index: 16;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoFrameWrapper = styled.div`
  position: relative;
  z-index: 15;
`;

const VideoFrame = styled.iframe`
  width: 960px;
  height: 540px;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  font-size: 34px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -32px;
  background: none;
  border: none;
  padding: 0px;
  color: white;
  outline: none;
  transform: rotate(45deg);
  align-self: flex-start;
`;

export const OpenedVideo: React.FC = ({ id, action }: any) =>
  (
    <OpenedVideoWrapper onClick={action}>
      <VideoFrameWrapper>
        <VideoFrame
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <CloseButton onClick={action}>+</CloseButton>
      </VideoFrameWrapper>
    </OpenedVideoWrapper>
  );
