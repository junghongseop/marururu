'use client';

import { ROUTES } from '@/constants/common/constant';
import { Loader } from '@/components/common';
import { NoticeDetailContent } from '@/components/notice';
import { AppLayout } from '@/layouts';
import { IconArrowLeft } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Link } from '@maru/ui';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import styled from 'styled-components';

interface PropsType {
    params: { id: number };
}

const NoticeDetailPage = ({ params: { id } }: PropsType) => {
    const router = useRouter();

    return (
        <AppLayout header={true} footer={true} style={{ padding: '0px 207px', marginTop: 52 }}>
            <StyledNoticeDetailPage>
                <Link onClick={() => router.push(ROUTES.NOTICE)} gap="2px">
                    <IconArrowLeft color={color.gray600} width={24} height={24} />
                    <Path>공지사항</Path>
                </Link>
                <Suspense fallback={<Loader />}>
                    <NoticeDetailContent id={id} />
                </Suspense>
            </StyledNoticeDetailPage>
        </AppLayout>
    );
};

export default NoticeDetailPage;

const StyledNoticeDetailPage = styled.div`
    position: relative;
    ${flex({ flexDirection: 'column' })}
    gap: 36px;
    width: 100%;
    height: 100%;
`;

const Path = styled.p`
    ${font.H5}
    color: ${color.gray900};
`;
