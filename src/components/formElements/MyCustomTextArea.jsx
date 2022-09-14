const MyCustomTextArea = ({ formFieldData }) => {
  return (
    <>
      <p>
        <label htmlFor={formFieldData.fieldName}>{formFieldData.label}</label>
      </p>
      <textarea
        id={formFieldData.id}
        name={formFieldData.id}
        rows={formFieldData.rows}
        cols={formFieldData.columns}
      >
        {formFieldData.description}
      </textarea>
    </>
  );
};

export default MyCustomTextArea;
