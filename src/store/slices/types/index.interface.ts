import app from 'slice/app.slice';
import navigation from 'slice/navigation.slice';
import { auth } from 'slice/persistors';

export type RootState = {
  app: ReturnType<typeof app>;
  auth: ReturnType<typeof auth>;
  navigation: ReturnType<typeof navigation>;
};

export type ResetAction = {
  type: string;
};
