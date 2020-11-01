export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal,answer) => {
    return {
        type: OPEN_MODAL,
        a: answer,
        modal
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};