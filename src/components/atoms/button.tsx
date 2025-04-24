/* eslint-disable @typescript-eslint/no-explicit-any */
interface ButtonProps {
    className: string;
    children: any;
    onClick?: () => void;
  }
  
  const Button = ({ className, children, onClick }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`${className} px-6 py-3 rounded-md capitalize`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  