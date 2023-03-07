import { useState } from "react";

export const defaultValue = "all"

const Dropdown = (props) => {
  const [value, setValue] = useState({defaultValue});

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
    props.onChange(value);
  };

  return (
    <div>
      <select
        onChange={onChange}
      >
        <option value={defaultValue} default>
          All
        </option>
        <option value="Skin protection">Skin protection</option>
        <option value="Skin care">Skin care</option>
        <option value="Perfumes">Perfumes</option>
      </select>
    </div>
  );
};

export default Dropdown;
