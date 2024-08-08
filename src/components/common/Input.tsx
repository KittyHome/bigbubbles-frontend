interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label = '',
  type = 'text',
  placeholder = '',
  className = '',
  name,
}: InputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={`id-${name}-input`}
        className={`pl-[14px] text-base text-white ${!label ? 'hidden' : ''}`}
      >
        {label}
      </label>
      <input
        id={`id-${name}-input`}
        type={type}
        name={name}
        placeholder={placeholder}
        className="rounded-xl border-1 border-primary-border/30 bg-primary-background/50 px-4 py-2.5 text-white outline-none placeholder:text-primary-placeholder"
      />
    </div>
  );
};

export default Input;
