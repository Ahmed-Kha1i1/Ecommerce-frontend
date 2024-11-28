function ToggleCurrentUser() {
  return (
    <div>
      <button
        type="button"
        className="flex rounded-full text-sm focus:ring-4 focus:ring-gray-300"
        id="user-menu-button-2"
        aria-expanded="false"
        data-dropdown-toggle="dropdown-2"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="user photo"
        />
      </button>
    </div>
  );
}

export default ToggleCurrentUser;
