import { ChangeEventHandler, useState } from 'react';

export const useAdmissionsState = () => {
    const [admissions, setAdmissions] = useState({
        입학전형선택: '',
        특별전형선택: '',
        기회균등전형선택: '',
        사회다양성전형선택: '',
    });

    return { admissions, setAdmissions };
};

export const useInput = () => {
    const { admissions, setAdmissions } = useAdmissionsState();

    const handleAdmissionsDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case '특별전형선택':
                setAdmissions({
                    ...admissions,
                    특별전형선택: value,
                    기회균등전형선택: '',
                    사회다양성전형선택: '',
                });
                break;
            case '입학전형선택':
                setAdmissions({
                    입학전형선택: value,
                    특별전형선택: '',
                    기회균등전형선택: '',
                    사회다양성전형선택: '',
                });
                break;
            default:
                setAdmissions({
                    ...admissions,
                    [name]: value,
                });
        }
    };

    return { handleAdmissionsDataChange };
};
