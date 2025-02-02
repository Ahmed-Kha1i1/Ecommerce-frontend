/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import ErrorMessage from "../../Core/ui/ErrorMessage";

function InputField({
  id,
  label,
  type,
  control,
  validationRule,
  error,
  placeholder,
  disabled = false,
  readOnly = false,
}) {
  return (
    <div className="">
      <label htmlFor={id} className="mb-2 block text-sm text-gray-600">
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        rules={validationRule}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            id={id}
            className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            data-fail={!!error?.message}
            disabled={disabled}
            placeholder={placeholder}
            readOnly={readOnly}
          />
        )}
      />
      {error?.message && <ErrorMessage message={error?.message} />}
    </div>
  );
}

export default InputField;
