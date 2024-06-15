import Overlay from "../common/overlay";

export default function Loading() {
  return (
    <div className="h-[90vh]">
      <Overlay isLoading={true} />
    </div>
  );
}
