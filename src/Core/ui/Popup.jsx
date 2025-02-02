/* eslint-disable react/prop-types */
function Popup({ children, referance, className, onClick }) {
  return (
    <div
      className={`fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center overflow-y-scroll backdrop-blur-sm ${className ? className : ""}`}
      onClick={onClick}
      ref={referance}
    >
      <div className="popup-enter shadow-all custom-scrollbar overflow-auto rounded-2xl bg-white p-6 sm:mx-4">
        {children}
      </div>
    </div>
  );
}

export default Popup;
