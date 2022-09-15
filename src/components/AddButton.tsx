import styled from "@emotion/styled";
import { MdOutlineAdd } from "react-icons/md";

interface Props {
  handleClick: () => void;
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
  const handleClick = props.handleClick;
  return (
    <CircleButton onClick={handleClick}>
      <MdOutlineAdd fontSize="16pt" />
    </CircleButton>
  );
};

export default AddButton;
