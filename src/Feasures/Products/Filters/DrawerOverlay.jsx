/* eslint-disable react/prop-types */
import { useState } from "react";
import CLoseButton from "../../../Core/ui/CLoseButton";
import useOutsideClick from "../../../Core/Hooks/useOutsideClick";

function DrawerOverlay({
  renderTrigger,
  renderChildren,
  title,
  MobileOnly = true,
  position = "right",
}) {
  const [isClosed, setIsClosed] = useState(true);
  const ref = useOutsideClick(Close);

  function Close() {
    setIsClosed(true);
  }

  function Open() {
    setIsClosed(false);
  }
  return (
    <>
      {renderTrigger && renderTrigger(Open)}
      <div
        className={`relative z-40 ${MobileOnly ? "lg:hidden" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`fixed inset-0 bg-black/80 transition-opacity duration-300 ease-linear data-[closed=true]:opacity-0 ${position === "right" ? "data-[closed=true]:translate-x-full" : "data-[closed=true]:-translate-x-full"}`}
          aria-hidden="true"
          data-closed={isClosed ? "true" : "false"}
        >
          <div
            ref={ref}
            className={`relative flex size-full max-w-xs transform flex-col justify-between overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out ${position === "right" ? "ml-auto data-[closed=true]:translate-x-full" : "mr-auto data-[closed=true]:-translate-x-full"}`}
            data-closed={isClosed ? "true" : "false"}
          >
            <div className="flex items-center justify-between px-4">
              <h3 className="mb-3">{title}</h3>
              <CLoseButton onClose={Close} />
            </div>

            {renderChildren(Close)}
          </div>
        </div>
      </div>
    </>
  );
}

export default DrawerOverlay;
