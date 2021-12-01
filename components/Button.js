const Button = (props) => {
  const { text, additionalClass, ...rest } = props;
  return (
    <button
      className={`bg-white text-xl font-bold px-8 py-3 rounded-md text-black hover:bg-black hover:border-white hover:text-gray-200 ${additionalClass} `}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
