const MyCustomSelect = ({ formFieldData }) => {
  return (
    <div style={{ paddingTop: "12px", paddingBottom: "15px" }}>
      <label htmlFor={formFieldData.id}>{formFieldData.label}</label>

      <select name={formFieldData.fieldName} id={formFieldData.id}>
        {/* Mapping through all the values */}
        {formFieldData.values.map((selectValue) => (
          <option value={selectValue.value}>{selectValue.label}</option>
        ))}
      </select>
    </div>
  );
};

export default MyCustomSelect;
