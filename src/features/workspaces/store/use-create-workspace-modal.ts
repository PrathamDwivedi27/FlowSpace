import { atom, useAtom } from 'jotai';

const modalState = atom(false);

export const useCreateWorkspaceModal = () => {
    return useAtom(modalState);
}


// it is just for modal visibility, like if workspace should be visible or not
// Initially it is false