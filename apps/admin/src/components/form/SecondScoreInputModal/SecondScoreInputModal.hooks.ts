import { useSecondScoreFormatQuery } from '@/services/form/queries';

export const useSecondScoreFormatAction = () => {
    const { data: secondScoreFormatData } = useSecondScoreFormatQuery();

    const handleDownloadSecondScoreFormatButtonClick = () => {
        if (!secondScoreFormatData) return;
        const excelUrl = window.URL.createObjectURL(new Blob([secondScoreFormatData]));

        const link = document.createElement('a');
        link.href = excelUrl;
        link.download = '2차 전형 점수 양식.xlsx';
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(excelUrl);
    };

    return { handleDownloadSecondScoreFormatButtonClick };
};
