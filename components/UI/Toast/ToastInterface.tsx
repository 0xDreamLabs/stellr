import {ToastTypeOptions} from '../../../interfaces/types';

export default interface ToastInterface {
    toastType: ToastTypeOptions,
    toastHeader: string,
    toastMessage: string | JSX.Element;
};
