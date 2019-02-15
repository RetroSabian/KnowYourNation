import styled from "styled-components";

export const Container = styled.div``;
export const ReaderContainer = styled.div`
  top: ${props => (props.fullscreen ? 0 : 36)}px;
  left: ${props => (props.fullscreen ? 0 : 1)}rem;
  right: ${props => (props.fullscreen ? 0 : 1)}rem;
  bottom: ${props => (props.fullscreen ? 0 : 10)}rem;
  transition: all 0.6s ease;
  ${props => !props.fullscreen && "0 0 5px rgba(0,0,0,.3);"};
`;
export const Bar = styled.header``;
const Button = styled.button``;

export const FontSizeButton = styled(Button)``;
export const ExitFullScreenButton = styled(Button)``;
