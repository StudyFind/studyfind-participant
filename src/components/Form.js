import React from "react";

function Form({ children, spacing, onSubmit, ...props }) {
  const handleEnter = (event) => {
    event.preventDefault();

    if (document.activeElement) {
      document.activeElement.blur();
    }

    onSubmit();
  };

  return (
    <form onSubmit={handleEnter} {...props}>
      {children}
    </form>
  );
}

export default Form;
