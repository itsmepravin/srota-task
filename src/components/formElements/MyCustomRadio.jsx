const MyCustomRadio = ({ formFieldData }) => {
  return (
    <div>
      <span>{formFieldData.label}</span>
      {/* Mapping through all the values from JSON schema */}
      {formFieldData.values.map((radioValue) => (
        <>
          <input
            type="radio"
            id={radioValue.id}
            name={formFieldData.fieldName}
            value={radioValue.value}
          />
            <label htmlFor={radioValue.id}>{radioValue.label}</label>
        </>
      ))}
    </div>
  );
};

export default MyCustomRadio;
