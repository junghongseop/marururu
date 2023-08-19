import { ResultsStep } from '@/types/results/client';
import { color } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { ResultsOption } from '@/types/results/client';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface PropsType {
    setResultsStep: Dispatch<SetStateAction<ResultsStep>>;
    option: ResultsOption;
}

const ResultsMain = ({ setResultsStep, option }: PropsType) => {
    const handleGoResultsPageButtonClick = () => {
        setResultsStep('RESULTS');
    };

    return (
        <StyledResultsMain>
            <InfoBox>
                {option === 'FIRST' ? (
                    <Column>
                        <Text fontType="p2" color={color.gray700}>
                            일시: 2023년 10월 23일 (월) 15:00
                        </Text>
                        <Text fontType="p2" color={color.gray700}>
                            모집 정원: 일반전형 및 특별전형 각각 모집정원의 130% 이내{' '}
                        </Text>
                        <Text fontType="p2" color={color.gray700}>
                            장소: 본교 입학전형 서비스 (마루)
                        </Text>
                    </Column>
                ) : (
                    <Column>
                        <Text fontType="p2" color={color.gray700}>
                            일시: 2023년 11월 2일 (목) 15:00
                        </Text>
                        <Text fontType="p2" color={color.gray700}>
                            모집 정원: 일반전형 36명, 특별전형 28명, 정원 외 전형 3명
                        </Text>
                        <Text fontType="p2" color={color.gray700}>
                            장소: 본교 입학전형 서비스 (마루)
                        </Text>
                    </Column>
                )}
            </InfoBox>
            <Button onClick={handleGoResultsPageButtonClick} size="LARGE">
                결과 확인하기
            </Button>
        </StyledResultsMain>
    );
};

export default ResultsMain;

const StyledResultsMain = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })}
    gap: 48px;
`;

const InfoBox = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 12px;
    width: 600px;
    padding: 24px 36px;
    background-color: ${color.gray50};
`;
