interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  rows?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  helperText,
  rows = 4,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-semibold text-gray-900">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        {...props}
        className={`
          px-4 py-2 rounded-lg border-2 border-gray-300 
          focus:border-primary-600 focus:outline-none 
          transition-colors duration-300 resize-vertical
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};
