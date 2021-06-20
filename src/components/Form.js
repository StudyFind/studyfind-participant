export const Form = ({ children, onSubmit, ...rest }) => {
  const handleEnter = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleEnter} {...rest}>
      {children}
    </form>
  );
};

export default Form;
