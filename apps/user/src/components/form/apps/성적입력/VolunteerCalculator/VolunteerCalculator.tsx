import { color, font } from '@maru/theme';
import { NumberInput, Row, Td, Th } from '@maru/ui';
import { styled } from 'styled-components';
import useInput from './VolunteerCalculator.hooks';

const VolunteerCalculator = () => {
    const { handleVolunteerInfoDataChange } = useInput();

    return (
        <Table>
            <Row>
                <Th width={162} height={56}>
                    학년
                </Th>
                <Th width={654} height={56}>
                    봉사시간
                </Th>
            </Row>
            <Row>
                <Td width={162} height={56} option="SECONDARY">
                    1학년
                </Td>
                <Td width={654} height={56}>
                    <NumberInput name="volunteerTime1" onChange={handleVolunteerInfoDataChange} />
                    <Hour>시간</Hour>
                </Td>
            </Row>
            <Row>
                <Td width={162} height={56} option="SECONDARY">
                    1학년
                </Td>
                <Td width={654} height={56}>
                    <NumberInput name="volunteerTime2" onChange={handleVolunteerInfoDataChange} />
                    <Hour>시간</Hour>
                </Td>
            </Row>
            <Row>
                <Td width={162} height={56} option="SECONDARY">
                    1학년
                </Td>
                <Td width={654} height={56}>
                    <NumberInput name="volunteerTime3" onChange={handleVolunteerInfoDataChange} />
                    <Hour>시간</Hour>
                </Td>
            </Row>
        </Table>
    );
};

const Table = styled.div`
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
`;

const Hour = styled.p`
    ${font.p2}
    color: ${color.gray900};
    margin-left: 8px;
`;

export default VolunteerCalculator;
