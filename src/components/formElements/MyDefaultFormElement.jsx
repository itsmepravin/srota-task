const MyDefaultFormElement = ({ formFieldData }) => {
  return (
    <>
      <div>
        <label htmlFor={formFieldData.fieldName}>{formFieldData.label}</label>
        <input
          type={formFieldData.type}
          name={formFieldData.fieldName}
          id={formFieldData.id}
        />
      </div>
      <br />
    </>
  );
};

export default MyDefaultFormElement;
