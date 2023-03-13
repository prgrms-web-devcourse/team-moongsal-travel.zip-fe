import { atom } from 'recoil';
import { v4 } from 'uuid';

import { ACCESS_TOKEN } from '@/constants';
import { UserInformationType } from '@/types/profile';
import { getItem } from '@/utils/storage';

export const isHeaderOpenState = atom({
  key: `isHeaderOpen/${v4()}`,
  default: false,
});

export const isSigninState = atom({
  key: 'IS_SIGNIN',
  default: Boolean(getItem(ACCESS_TOKEN)),
});

export const isAuthConfirmModalState = atom({
  key: 'IS_AUTH_CONFIRM_MODAL',
  default: false,
});

export const userInformationState = atom<UserInformationType>({
  key: 'USER_INFORMATION',
  default: {
    email: '',
    nickname: '',
    profileImageUrl: '',
    birthYear: '',
    errorMessage: null,
  },
});
