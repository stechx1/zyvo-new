export const Button = ({ children, type, onClick, disabled = false }) => {
  if (type === 'secondary') {
    return (
      <button onClick={onClick} className='hover:underline'>
        {children}
      </button>
    );
  } else if (type === 'outline') {
    return (
      <button
        onClick={onClick}
        className='bg-none border-[#3A4B4C] hover:bg-[#3A4B4C] hover:text-white border-[1px] rounded-full px-4 py-2 text-[#3A4B4C]'
      >
        {children}
      </button>
    );
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='bg-primary border border-primary hover:bg-white px-6 py-3 rounded-full disabled:pointer-events-none disabled:opacity-50'
    >
      {children}
    </button>
  );
};
