/* eslint-disable react/prop-types */
function AccountTitle({ children }) {
  return (
    <>
      <div className="pt-4">
        <div className="py-2 text-2xl font-semibold">{children}</div>
      </div>
      <hr className="mb-4 mt-1" />
    </>
  );
}

export default AccountTitle;
