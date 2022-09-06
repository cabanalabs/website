export const Button = ({ children, variant }) => {
  if (variant === 'outlined') {
    return (
      <button className='border-2 border-cabanaBlue text-cabanaBlue py-[12px] px-[36px] rounded-full text-lg font-medium hover:bg-cabanaBlue hover:border-2 hover:border-cabanaBlue hover:text-white hover:scale-[1.02] active:scale-100 transition-all'>
        {children}
      </button>
    );
  }

  return (
    <button className='border-2 border-cabanaBlue bg-cabanaBlue text-white py-[12px] px-[36px] rounded-full text-lg font-medium hover:bg-white hover:border-2 hover:border-cabanaBlue hover:text-cabanaBlue hover:scale-[1.02] active:scale-100 transition-all'>
      {children}
    </button>
  );
};
