/* eslint-disable react/prop-types */
import { GoArrowLeft, GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import useMainCategories from "../../../Feasures/Categories/useMainCategories";
import useCategory from "../../../Feasures/Categories/useCategory";
import Spinner from "../Spinner";

function ManageCategories({ onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function onSelectCategory(category) {
    setSelectedCategory(category);
  }

  function onReturn() {
    setSelectedCategory(null);
  }

  function handleClose() {
    setSelectedCategory(null);
    onClose();
  }
  return (
    <div className="relative h-full">
      <ManageMainCategories
        isSelectCategory={!!selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <ManageSubCategories
        selectedCategory={selectedCategory}
        onClose={handleClose}
        onReturn={onReturn}
      />
    </div>
  );
}

function ManageMainCategories({ isSelectCategory = true, onSelectCategory }) {
  const { isLoading, mainCategories = [] } = useMainCategories();

  if (isLoading) return <Spinner />;
  return (
    <ul
      className={`space-y-2 ${!isSelectCategory ? "translate-x-0" : "-translate-x-full"} main-menu`}
    >
      {mainCategories.map((item) => (
        <li className="" key={item.id}>
          <MenuItem value={item.name} onClick={() => onSelectCategory(item)} />
        </li>
      ))}
    </ul>
  );
}

function ManageSubCategories({ selectedCategory, onReturn, onClose }) {
  const { isLoading, category } = useCategory(selectedCategory?.id);

  if (isLoading) return <Spinner />;

  return (
    <ul
      className={`${selectedCategory ? "translate-x-0" : "translate-x-full"} main-menu`}
    >
      <li className="menu-item" onClick={onReturn}>
        <GoArrowLeft />
        <div className="text-lg font-semibold">Main Menu</div>
      </li>
      <li className="text-xl font-semibold">
        <MenuItem
          value={category?.name}
          showIcon={false}
          to={`/Products?category=${category?.id}`}
          onClick={onClose}
        />
      </li>
      {category?.children.map((item) => (
        <li className="" key={item.id}>
          <MenuItem
            value={item.name}
            showIcon={false}
            to={`/Products?category=${item.id}`}
            onClick={onClose}
          />
        </li>
      ))}
    </ul>
  );
}

function MenuItem({ value, onClick, to, showIcon = true }) {
  const handleButtonClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const handleLinkClick = () => {
    onClick?.();
  };

  if (to) {
    return (
      <Link className="menu-item" to={to} onClick={handleLinkClick}>
        <div>{value}</div>
        {showIcon && <GoChevronRight />}
      </Link>
    );
  }

  return (
    <button className="menu-item w-full" onClick={handleButtonClick}>
      <div>{value}</div>
      {showIcon && <GoChevronRight />}
    </button>
  );
}

export default ManageCategories;
