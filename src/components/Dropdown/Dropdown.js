import { useState } from "react";

const Dropdown = (props) => {
  const [value, setValue] = useState("all");

  const onChange = (event) => {
    const value = event.target.value;
    console.log(`dropdown value ${value}`)
    setValue(value);
    props.onChange(value);
    return value;
  };

  return (
    <div>
      <select
        onChange={onChange}
      >
        <option value="all" default>
          All
        </option>
        <option value="skin-protection">Skin protection</option>
        <option value="skin-care">Skin care</option>
        <option value="perfumes">Perfumes</option>
      </select>
    </div>
  );
};

export default Dropdown;
