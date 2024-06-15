import { LoaderPinwheel } from "lucide-react";
interface IOverlay {
  clickHandler?: (boolean: boolean) => void;
  isLoading: boolean;
}
export default function Overlay({ clickHandler, isLoading }: IOverlay) {
  return (
    <div
      onClick={clickHandler ? () => clickHandler(false) : undefined}
      className="fixed inset-0 bg-black/40 z-30 transition-all flex-center"
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
