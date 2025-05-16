import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setNavigateReady } from '../slices/navigation.slice';

import { History } from './history';

import type { AppDispatch } from '@/store';

export const HistoryRouter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    History.setNavigate(navigate);
    dispatch(setNavigateReady(true));
  }, [navigate, dispatch]);

  return null;
};
