import { useState } from 'react';

type InputBoxProps = {
  placeholder?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
};

export default function InputBox({
  initialValue = '',
  onChange,
}: InputBoxProps) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex justify-center my-5 w-full">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-[700px] text-[18px] text-[#474D66] bg-white  rounded-[10px] py-[16px] px-[20px] outline-none box-border"
      />
    </div>
  );
}
