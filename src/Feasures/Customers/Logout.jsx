import useSignOut from "../Auth/useSignOut";

function Logout() {
  const { isLoading, signOut } = useSignOut();
  function handleSignOut() {
    signOut();
  }
  return (
    <div className="mt-4 border-t p-4 text-center">
      <button
        className="rounded-lg p-2 text-blue-800 transition hover:bg-blue-400"
        disabled={isLoading}
        onClick={handleSignOut}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
