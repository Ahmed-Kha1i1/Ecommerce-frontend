const pages = [1, 2, 3, 4, 5];
function PaginationBar() {
  const style =
    "flex h-10 items-center justify-center border-gray-300 bg-white px-4 leading-tight text-black hover:bg-gray-100 hover:text-gray-700 border";

  return (
    <nav aria-label="Page navigation example">
      <ul className="mx-auto flex h-10 justify-center -space-x-px text-lg">
        <li>
          <a href="#" className={`ms-0 rounded-s-lg border-e-0 ${style}`}>
            Previous
          </a>
        </li>
        {pages.map((value) => (
          <li key={value}>
            <a href="#" className={` ${style}`}>
              {value}
            </a>
          </li>
        ))}
        <li>
          <a href="#" className={`rounded-e-lg ${style}`}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationBar;
