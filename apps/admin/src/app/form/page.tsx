'use client';

import ButtonMenu from '@/components/common/ButtonMenu/ButtonMenu';
import ButtonMenuItem from '@/components/common/ButtonMenu/ButtonMenuItem/ButtonMenuItem';
import ExportExcelModal from '@/components/form/ExportExcelModal/ExportExcelModal';
import FormTable from '@/components/form/FormTable/FormTable';
import SecondScoreUploadModal from '@/components/form/SecondScoreUploadModal/SecondScoreUploadModal';
import AppLayout from '@/layouts/AppLayout';
import initMockAPI from '@/mocks';
import { FORM_SORTING_CATEGORY } from '@/constants/form/constants';
import type { FormStatus, FormSort, FormCategory } from '@/types/form/client';
import { useSetFormToPrintStore } from '@/store/form/formToPrint';
import { useIsFormToPrintSelectingStore } from '@/store/form/isFormToPrintSelecting';
import { useIsSecondRoundResultEditingStore } from '@/store/form/isSecondRoundResultEditing';
import { useFormListTypeStore, useFormListSortingTypeStore } from '@/store/form/type';
import {
  useSetSecondRoundResultStore,
  useSecondRoundResultValueStore,
} from '@/store/form/secondRoundResult';
import {
  IconCheckDocument,
  IconClose,
  IconEditDocument,
  IconEditAllDocument,
  IconFilter,
  IconPrint,
  IconUpload,
} from '@maru/icon';
import { color } from '@maru/design-token';
import { Button, Column, Row, Dropdown, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import { styled } from 'styled-components';
import {
  usePrintFormURLAction,
  useSecondRoundResultEditAction,
  useSecondRoundResultEditAutoAction,
} from './form.hooks';
import withAuth from '@/hoc/withAuth';
import { useState, useEffect } from 'react';

if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

const FormPage = () => {
  const [formListType, setFormListType] = useFormListTypeStore();
  const [formListSortingType, setFormListSortingType] = useFormListSortingTypeStore();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFormListTypeReview = () => setFormListType('검토해야 하는 원서 모아보기');
  const handleFormListTypeAll = () => setFormListType('모두 보기');

  const overlay = useOverlay();

  const openSecondScoreUplaodModal = () => {
    overlay.open(({ isOpen, close }) => (
      <SecondScoreUploadModal isOpen={isOpen} onClose={close} />
    ));
  };

  const [isSecondRoundResultEditing, setIsSecondRoundResultEditing] =
    useIsSecondRoundResultEditingStore();
  const secondRoundResult = useSetSecondRoundResultStore();
  const secondRoundResultValue = useSecondRoundResultValueStore();

  const setIsSecondRoundResultEditingTrue = () => setIsSecondRoundResultEditing(true);
  const setIsSecondRoundResultEditingFalse = () => {
    setIsSecondRoundResultEditing(false);
    secondRoundResult({});
  };

  const { handleSecondRoundResultEditAuto } = useSecondRoundResultEditAutoAction();

  const { handleSecondRoundResultEditCompleteButtonClick } =
    useSecondRoundResultEditAction();

  useEffect(() => {
    setIsButtonDisabled(Object.keys(secondRoundResultValue).length === 0);
  }, [secondRoundResultValue]);

  const handleEditCompleteButtonClick = () => {
    if (!isButtonDisabled) {
      handleSecondRoundResultEditCompleteButtonClick();
    }
  };

  const openExportExcelModal = () => {
    overlay.open(({ isOpen, close }) => (
      <ExportExcelModal isOpen={isOpen} onClose={close} />
    ));
  };

  const [isFormToPrintSelecting, setIsFormToPrintSelecting] =
    useIsFormToPrintSelectingStore();
  const setFormToPrint = useSetFormToPrintStore();

  const setIsFormToPrintSelectingTrue = () => {
    setIsFormToPrintSelecting(true);
  };
  const setIsFormToPrintSelectingFalse = () => {
    setIsFormToPrintSelecting(false);
    setFormToPrint({});
  };

  const { handlePrintFormUrlButtonClick } = usePrintFormURLAction();

  const handleSortStatus = (value: string) => {
    setFormListType('정렬');
    if (value === 'RESET') {
      setFormListSortingType((prev) => ({ ...prev, status: null }));
    } else {
      setFormListSortingType((prev) => ({ ...prev, status: value as FormStatus }));
    }
  };

  const handleSortType = (value: string) => {
    setFormListType('정렬');
    if (value === 'RESET') {
      setFormListSortingType((prev) => ({ ...prev, type: null }));
    } else {
      setFormListSortingType((prev) => ({ ...prev, type: value as FormCategory }));
    }
  };

  const handleSortForm = (value: string) => {
    setFormListType('정렬');
    if (value === 'RESET') {
      setFormListSortingType((prev) => ({ ...prev, sort: null }));
    } else {
      setFormListSortingType((prev) => ({ ...prev, sort: value as FormSort }));
    }
  };

  return (
    <AppLayout>
      <StyledMainPage>
        <Text fontType="H1">원서 관리</Text>
        <Column gap={36}>
          <Row justifyContent="space-between">
            <Row gap={8}>
              <Dropdown
                data={[
                  { value: 'RESET', label: '전체 보기' },
                  { value: 'APPROVED', label: '확인 중' },
                  { value: 'FIRST_FAILED', label: '1차 불합격' },
                  { value: 'FAILED', label: '불합격' },
                  { value: 'FINAL_SUBMITTED', label: '최종 제출' },
                  { value: 'SUBMITTED', label: '제출' },
                  { value: 'RECEIVED', label: '승인' },
                  { value: 'NO_SHOW', label: '불참' },
                  { value: 'FIRST_PASSED', label: '1차 합격' },
                  { value: 'PASSED', label: '최종 합격' },
                  { value: 'REJECTED', label: '반려' },
                ]}
                size="SMALL"
                width={140}
                placeholder="상태 별"
                onChange={handleSortStatus}
                name="statusSort"
                value={
                  formListSortingType.status
                    ? FORM_SORTING_CATEGORY[formListSortingType.status]
                    : undefined
                }
                doubled={5}
              />
              <Dropdown
                data={[
                  { value: 'RESET', label: '전체 보기' },
                  { value: 'REGULAR', label: '일반전형' },
                  { value: 'SPECIAL', label: '특별전형' },
                  { value: 'SUPERNUMERARY', label: '정원 외 전형' },
                  {
                    value: 'SOCIAL_INTEGRATION',
                    label: '사회통합전형',
                  },
                  { value: 'MEISTER_TALENT', label: '마이스터인재전형' },
                  {
                    value: 'NATIONAL_VETERANS_EDUCATION',
                    label: '국가보훈대상자 중 교육지원대상자녀',
                  },
                  { value: 'SPECIAL_ADMISSION', label: '특례입학대상자' },
                  { value: 'EQUAL_OPPORTUNITY', label: '기회균등전형' },
                  { value: 'SOCIETY_DIVERSITY', label: '사회다양성전형' },
                ]}
                size="SMALL"
                width={140}
                placeholder="전형 별"
                onChange={handleSortType}
                name="typeSort"
                value={
                  formListSortingType.type
                    ? FORM_SORTING_CATEGORY[formListSortingType.type]
                    : undefined
                }
                doubled={5}
              />
              <Dropdown
                data={[
                  { value: 'reset', label: '전체 보기' },
                  { value: 'total-score-desc', label: '최종 점수 높은 순' },
                  { value: 'total-score-asc', label: '최종 점수 낮은 순' },
                  { value: 'form-id', label: '접수순' },
                ]}
                size="SMALL"
                width={140}
                placeholder="기타"
                onChange={handleSortForm}
                name="formSort"
                value={
                  formListSortingType.sort
                    ? FORM_SORTING_CATEGORY[formListSortingType.sort]
                    : undefined
                }
              />
            </Row>
            <Row gap={16}>
              {formListType === '검토해야 하는 원서 모아보기' ? (
                <ReviewFilterBox>
                  <Row alignItems="center" gap={4}>
                    <IconFilter width={24} height={24} />
                    <Text fontType="context" color={color.maruDefault}>
                      검토해야 하는 원서
                    </Text>
                  </Row>
                  <IconClose
                    width={18}
                    height={18}
                    color={color.maruDefault}
                    cursor="pointer"
                    onClick={handleFormListTypeAll}
                  />
                </ReviewFilterBox>
              ) : null}
              {isSecondRoundResultEditing ? (
                <Row gap={16}>
                  <Button
                    styleType="SECONDARY"
                    size="SMALL"
                    onClick={setIsSecondRoundResultEditingFalse}
                  >
                    취소
                  </Button>
                  <Button
                    size="SMALL"
                    onClick={handleEditCompleteButtonClick}
                    disabled={isButtonDisabled}
                    styleType={isButtonDisabled ? 'DISABLED' : 'PRIMARY'}
                  >
                    완료
                  </Button>
                </Row>
              ) : isFormToPrintSelecting ? (
                <Row gap={16}>
                  <Button
                    styleType="SECONDARY"
                    size="SMALL"
                    onClick={setIsFormToPrintSelectingFalse}
                  >
                    취소
                  </Button>
                  <Button size="SMALL" onClick={handlePrintFormUrlButtonClick}>
                    출력하기
                  </Button>
                </Row>
              ) : (
                <ButtonMenu
                  width={280}
                  menuItemList={[
                    <ButtonMenuItem onClick={handleFormListTypeReview}>
                      <IconCheckDocument color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        검토해야 하는 원서 모아보기
                      </Text>
                    </ButtonMenuItem>,
                    <ButtonMenuItem onClick={openSecondScoreUplaodModal}>
                      <IconEditDocument color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        2차 전형 점수 입력하기
                      </Text>
                    </ButtonMenuItem>,
                    <ButtonMenuItem onClick={setIsSecondRoundResultEditingTrue}>
                      <IconEditDocument color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        2차 합격 여부 변경하기
                      </Text>
                    </ButtonMenuItem>,
                    <ButtonMenuItem onClick={handleSecondRoundResultEditAuto}>
                      <IconEditAllDocument color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        2차 합격자 자동 선발
                      </Text>
                    </ButtonMenuItem>,
                    <ButtonMenuItem onClick={openExportExcelModal}>
                      <IconUpload color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        명단 엑셀로 내보내기
                      </Text>
                    </ButtonMenuItem>,
                    <ButtonMenuItem onClick={setIsFormToPrintSelectingTrue}>
                      <IconPrint color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        원서 출력하기
                      </Text>
                    </ButtonMenuItem>,
                  ]}
                />
              )}
            </Row>
          </Row>
          <FormTable />
        </Column>
      </StyledMainPage>
    </AppLayout>
  );
};

export default withAuth(FormPage);

const StyledMainPage = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 64px 75px;

  overflow: auto;
`;

const ReviewFilterBox = styled.div`
  ${flex({ alignItems: 'center' })};
  gap: 12px;
  height: 40px;
  padding: 0 10px 0 8px;
  border-radius: 6px;
  background: ${color.maruLightBlue};
`;
