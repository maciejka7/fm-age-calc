import { useState } from 'react';

interface Props {
  label: string;
  placeholder: string;
}

export const Input = (props: Props) => {
  const { label, placeholder } = props;

  const [isError, setErroor] = useState(false);

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span
          className={`label-text uppercase font-bold ${
            isError && 'text-error '
          }`}
        >
          {label}
        </span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`input input-bordered w-full max-w-xs font-bold uppercase ${
          isError && 'input-error'
        }`}
      />
      {isError === true && (
        <label className="label">
          <span className="label-text-alt italic text-error">
            Must be a vaild date
          </span>
        </label>
      )}
    </div>
  );
};
