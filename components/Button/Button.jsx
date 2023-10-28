export const Button = ({ children, onClick, type }) => {
  if (type === "outlined") {
    return (
      <button
        className="dark:text-linkWater dark:border-linkWater dark:hover:bg-linkWater dark:hover:text-swamp bg-transparent hover:bg-swamp text-swamp font-medium hover:font-bold hover:text-white py-2 px-4 border-[3px] border-swamp hover:border-transparent rounded-3xl text-sm transition-all"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="bg-swamp text-white font-semibold  py-3 px-6 border-[3px] border-swamp hover:border-transparent rounded-full text-sm hover:font-bold transition-all hover:bg-linkWater hover:text-swamp hover:border-linkWater"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
