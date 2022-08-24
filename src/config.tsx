const URL = 'http://54.149.205.248:3000';

export const API = {
  USER_INFO: `${URL}/users`,
  DETAIL: `${URL}/projects`,
  KAKAO_LOGIN: `${URL}/users/signin/kakao`,
  GET_ITEMS: `${URL}/projects?order=recent`,
  SORT_RECENT: `${URL}/projects?order=recent`,
  SORT_LIKES: `${URL}/projects?order=likes`,
  POST: `${URL}/projects`,
};
