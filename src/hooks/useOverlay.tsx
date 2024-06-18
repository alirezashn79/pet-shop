import { create } from "zustand";

interface IUseCategory {
  showOverlay: boolean;
  toggleOverlay: () => void;
  setOverley: (type: boolean) => void;
}

const useOverlay = create<IUseCategory>((set) => ({
  showOverlay: false,
  toggleOverlay: () => {
    set((state) => ({ showOverlay: !state.showOverlay }));
    // document.body.classList.toggle("lock-body-scroll");
  },
  setOverley: (type) => set({ showOverlay: type }),
}));

export default useOverlay;
