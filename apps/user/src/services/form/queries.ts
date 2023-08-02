import KEY from '@/constants/key';
import { School } from '@/types/form';
import { useQuery } from 'react-query';
import { schoolList } from './api';

export const useSchoolListQuery = (school: string) => {
    return useQuery<School[]>({
        queryKey: [KEY.FORM_SCHOOL_LIST, school],
        queryFn: () => schoolList(school),
        initialData: [],
    });
};
