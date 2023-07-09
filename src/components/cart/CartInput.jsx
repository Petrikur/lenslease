export const CartInput = ({ label, type, id, value, onChange,required }) => {
    return (
      <div className="mt-8">
        <label htmlFor={id} className="block text-md leading-6 text-gray-900">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          id={id}
          className="formInput"
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    );
  };
  
  