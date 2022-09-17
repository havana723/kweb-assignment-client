import styled from "@emotion/styled";

interface Props {
  handleClick: () => void;
  icon: React.ReactNode;
}

const CircleButton = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;
  padding: 0;
  margin: 0;
  width: 48px;
  height: 48px;
  background: #980000;
  border-radius: 9999999px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddButton: React.FC<Props> = (props) => {
  const { handleClick, icon } = props;
  return <CircleButton onClick={handleClick}>{icon}</CircleButton>;
};

export default AddButton;
