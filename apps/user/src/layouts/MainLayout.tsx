import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { color } from '@maru/global-style';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
    children: ReactNode;
}

const MainLayout = ({ children }: PropsType) => {
    return (
        <>
            <Header />
            <StyledMainLayout>{children}</StyledMainLayout>
            <Footer />
        </>
    );
};

export default MainLayout;

const StyledMainLayout = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${color.white};
    padding: 0px 100px;
    margin-bottom: 250px;
`;
