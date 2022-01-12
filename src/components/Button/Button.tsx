export const Button = (props) => {
  return (
    <button className="inline-flex justify-center items-center bg-sky-3 text-sky-11 font-regular text-base-lg leading-base-lg py-4 px-8">
      {props.children}
    </button>
  );
};
