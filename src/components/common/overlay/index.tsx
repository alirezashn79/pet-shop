import { LoaderPinwheel } from "lucide-react";
import useOverlay from "../../../hooks/useOverlay";
interface IOverlay {
  isLoading: boolean;
}
export default function Overlay({ isLoading }: IOverlay) {
  const toggleOverlay = useOverlay((state) => state.toggleOverlay);
  return (
    <div
      onClick={!isLoading ? toggleOverlay : undefined}
      className={`fixed  inset-0 backdrop-blur-sm bg-black/30 z-30 transition-all duration-300 flex-center delay-200`}
    >
      {isLoading && (
        <div className="flex-center flex-col gap-y-4">
          <LoaderPinwheel className="animate-spin text-primary h-16 w-16" />
          <span className="text-primary font-semibold text-2xl">
            درحال بارگذاری...
          </span>
        </div>
      )}
    </div>
  );
}
