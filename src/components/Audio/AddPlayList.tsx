import styled from 'styled-components';

const AddPlayList = styled.button`
  background-color: #ffb11b !important;
  border-radius: 20px;
  width: 113px !important;
  height: 113px;
  margin: 13px 13px 50px 13px;
  position: relative;
  outline: none;
  ::after {
    position: absolute;
    content: '+';
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
  p {
    color: black;
    text-align: center;
    margin-top: 120px;
  }
`;

export default AddPlayList;
