import { useFairListQuery } from '@/services/fair/queries';
import { flex } from '@maru/utils';
import StudentItem from './ClosedItem/StudentItem';
import styled from 'styled-components';

interface Props {
  fairType: string;
}

const StudentClosedFairList = ({ fairType }: Props) => {
  const { data: fairListData } = useFairListQuery(fairType);

  return fairListData ? (
    <StyledFairList>
      {fairListData.map(
        ({ start, place, applicationStartDate, applicationEndDate, status }, index) => (
          <StudentItem
            key={`fair-${index}`}
            start={start}
            place={place}
            applicationStartDate={applicationStartDate}
            applicationEndDate={applicationEndDate}
            status={status}
          />
        )
      )}
    </StyledFairList>
  ) : null;
};

export default StudentClosedFairList;

const StyledFairList = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 20px;
  width: 100%;
`;
