import { ToastTypeOptions } from '../../../interfaces/types';

export type ToastProps = {
  toastType: ToastTypeOptions,
  toastHeader: string,
  toastMessage: string | JSX.Element;
};
