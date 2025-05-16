import { createAction } from 'redux-actions';

export const HIDE_LOADER = 'HIDE_LOADER' as const;
export const hideLoader = createAction(HIDE_LOADER);

export const SHOW_LOADER = 'SHOW_LOADER' as const;
export const showLoader = createAction(SHOW_LOADER);

export const PAGE_TITLE = 'PAGE_TITLE' as const;
export const pageTitle = createAction(PAGE_TITLE);
