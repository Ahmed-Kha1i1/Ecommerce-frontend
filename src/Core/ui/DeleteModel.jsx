/* eslint-disable react/prop-types */

function DeleteModal({
  onCloseModal,
  removeText = "Remove",
  closeText = "I am not sure",
  disabledDeleteBtn = false,
  massage,
  onDelete,
  children,
}) {
  return (
    <div className="w-[400px] max-w-full sm:max-w-[400px]">
      <div className="my-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline w-14 fill-red-500"
          viewBox="0 0 286.054 286.054"
        >
          <path
            fill="#e2574c"
            d="M143.027 0C64.04 0 0 64.04 0 143.027c0 78.996 64.04 143.027 143.027 143.027 78.996 0 143.027-64.022 143.027-143.027C286.054 64.04 222.022 0 143.027 0zm0 259.236c-64.183 0-116.209-52.026-116.209-116.209S78.844 26.818 143.027 26.818s116.209 52.026 116.209 116.209-52.026 116.209-116.209 116.209zm.009-196.51c-10.244 0-17.995 5.346-17.995 13.981v79.201c0 8.644 7.75 13.972 17.995 13.972 9.994 0 17.995-5.551 17.995-13.972V76.707c-.001-8.43-8.001-13.981-17.995-13.981zm0 124.997c-9.842 0-17.852 8.01-17.852 17.86 0 9.833 8.01 17.843 17.852 17.843s17.843-8.01 17.843-17.843c-.001-9.851-8.001-17.86-17.843-17.86z"
            data-original="#e2574c"
          />
        </svg>

        <h4 className="mt-6 text-lg font-semibold text-gray-800">{massage}</h4>
        <p className="mt-2 text-sm text-gray-500">Are you sure to proceed?</p>
      </div>
      {children}
      <div className="mt-3 grid grid-cols-2 gap-4 max-sm:flex-col">
        <button
          type="button"
          onClick={onCloseModal}
          className="w-full rounded-lg border-none bg-gray-200 px-5 py-2.5 text-sm tracking-wide text-gray-800 outline-none hover:bg-gray-300"
        >
          {closeText}
        </button>
        <button
          type="submit"
          onClick={onDelete}
          disabled={disabledDeleteBtn}
          className="w-full rounded-lg border-none bg-red-500 px-5 py-2.5 text-sm tracking-wide text-white outline-none hover:bg-red-600"
        >
          {removeText}
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
