import {ToastTypeOptions} from '../../../interfaces/types';

export default interface ToastProps {
    toastType: ToastTypeOptions,
    toastHeader: string,
    toastMessage: string | JSX.Element;
};
