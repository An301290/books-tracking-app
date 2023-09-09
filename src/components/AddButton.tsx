import React from "react";

interface AddButtonProps {
  showSearchPage: boolean;
  setShowSearchpage: (value: boolean) => void;
}

const AddButton = ({ showSearchPage, setShowSearchpage }: AddButtonProps) => {
  return (
    <div className="open-search">
      <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
    </div>
  );
};

export default AddButton;
