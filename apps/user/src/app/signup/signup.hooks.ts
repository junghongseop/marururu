import { PostJoinAuthReq } from '@/types/auth/remote';
import { useJoinUserMutation, useRequestEmailMutation } from '@/services/auth/mutations';
import { ChangeEventHandler, useState } from 'react';

export const useJoinAction = (joinUserData: PostJoinAuthReq, termsAgree: boolean) => {
    const { joinUserMutate } = useJoinUserMutation(joinUserData);

    const handleJoinButtonClick = () => {
        if (joinUserData.password === joinUserData.password_confirm) {
            if (termsAgree) {
                joinUserMutate();
            } else {
                alert('이용약관 동의를 해주세요');
            }
        } else {
            alert('비밀번호를 한번만 확인해주세요');
        }
    };

    return { handleJoinButtonClick };
};

export const useRequestEmail = (email: string) => {
    const { requestEmailMutate } = useRequestEmailMutation(email);

    const handleRequestEmailButtonClick = () => {
        requestEmailMutate();
    };

    return { handleRequestEmailButtonClick };
};

export const useInput = () => {
    const [joinUserData, setJoinUserData] = useState<PostJoinAuthReq>({
        email: '',
        code: '',
        password: '',
        password_confirm: '',
    });

    const handleJoinUserDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setJoinUserData({ ...joinUserData, [name]: value });
    };

    return { joinUserData, handleJoinUserDataChange };
};
