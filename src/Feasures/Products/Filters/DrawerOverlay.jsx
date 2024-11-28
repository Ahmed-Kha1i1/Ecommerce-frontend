/* eslint-disable react/prop-types */
import { useState } from "react";
import CLoseButton from "../../../Core/ui/CLoseButton";
import useOutsideClick from "../../../Core/Hooks/useOutsideClick";

function DrawerOverlay({ renderTrigger, children, position = "right" }) {
  const [isClosed, setIsClosed] = useState(true);
  const ref = useOutsideClick(Close);

  function Close() {
    setIsClosed(true);
  }
  return (
    <>
      {renderTrigger && renderTrigger(setIsClosed)}
      <div
        className={`relative z-40 lg:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-linear data-[closed=true]:opacity-0 ${position === "right" ? "data-[closed=true]:translate-x-full" : "data-[closed=true]:-translate-x-full"}`}
          aria-hidden="true"
          data-closed={isClosed ? "true" : "false"}
        >
          <div
            ref={ref}
            className={`relative flex size-full max-w-xs transform flex-col justify-between overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out ${position === "right" ? "ml-auto data-[closed=true]:translate-x-full" : "mr-auto data-[closed=true]:-translate-x-full"}`}
            data-closed={isClosed ? "true" : "false"}
          >
            <div className="flex items-center justify-between px-4">
              <h3>Filters</h3>
              <CLoseButton onClose={Close} />
            </div>

            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default DrawerOverlay;
