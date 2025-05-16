import { CheckCircle, X, XCircle } from 'lucide-react';
import { toast, ToastOptions } from 'react-hot-toast';

import { NotificationPosition } from './enum';

export const successMessage = (
  message: string,
  position: NotificationPosition = NotificationPosition.BottomRight,
  duration: number = 4000
): void => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'opacity-100' : 'opacity-0'
        } w-[320px] flex items-start justify-between gap-2 rounded-lg shadow-lg px-4 py-3 transition-all duration-300 bg-green-50 text-green-800`}
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          <CheckCircle className="text-green-500" size={18} />
          {message}
        </div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-gray-500 hover:text-gray-800 transition cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>
    ),
    {
      duration,
      position,
    } as ToastOptions
  );
};

export const errorMessage = (
  message: string,
  position: NotificationPosition = NotificationPosition.BottomRight,
  duration: number = 4000
): void => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'opacity-100' : 'opacity-0'
        } w-[320px] flex items-start justify-between gap-2 rounded-lg shadow-lg px-4 py-3 transition-all duration-300 bg-red-50 text-red-800`}
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          <XCircle className="text-red-500" size={18} />
          {message}
        </div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-gray-500 hover:text-gray-800 transition cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>
    ),
    {
      duration,
      position,
    } as ToastOptions
  );
};
