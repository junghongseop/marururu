import Row from "@/components/common/Flex/Row";
import { font } from "@/styles/font";
import { color } from "@/styles/color";
import styled from "styled-components";

interface PropsType {
  date: string;
  plan: string;
}

const ScheduleItem = ({ date, plan }: PropsType) => {
  return (
    <StyledScheduleItem>
      <Date>{date}</Date>
      <Row gap="6px" alignItems="center">
        <Bar />
        <Plan>{plan}</Plan>
      </Row>
    </StyledScheduleItem>
  );
};

export default ScheduleItem;

const StyledScheduleItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  height: 58px;
  width: 100%;
`;

const Date = styled.p`
  ${font.context}
  color: ${color.gray900};
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 3px;
`;

const Plan = styled.p`
  ${font.H5}
  color: ${color.gray900};
`;

const Bar = styled.div`
  width: 4px;
  height: 100%;
  background-color: ${color.maruDefault};
  border-radius: 2px;
`;
