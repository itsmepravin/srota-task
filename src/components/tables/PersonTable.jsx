const PersonTable = ({ allPersons }) => {
  // Getting all the keys to render as table headings
  const allPersonsKeys = Object.keys(allPersons[0]);
  return (
    <table style={{ textAlign: "center", width: "1080px" }}>
      <thead>
        {allPersonsKeys.map((element) => (
          <td>{element.toUpperCase()}</td>
        ))}
      </thead>
      {allPersons.map((element) => (
        <tbody>
          <tr>
            <td>{element.fName}</td>
            <td>{element.lName}</td>
            <td>{element.age}</td>
            <td>{element.dateOfBirth}</td>
            <td>{element.race}</td>
            <td>{element.educationLevel}</td>
            <td>{element.salary}</td>
            <td>{element.aboutYourself}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default PersonTable;
