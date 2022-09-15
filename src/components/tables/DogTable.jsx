const DogTable = ({ allDogs }) => {
  // Getting all the keys to render as table headings
  const allDogsKeys = Object.keys(allDogs[0]);
  return (
    <table style={{ textAlign: "center", width: "1080px" }}>
      <thead>
        {allDogsKeys.map((element) => (
          <td>{element.toUpperCase()}</td>
        ))}
      </thead>
      {allDogs.map((element) => (
        <tbody>
          <tr>
            <td>{element.name}</td>
            <td>{element.age}</td>
            <td>{element.togetherFrom}</td>
            <td>{element.gender}</td>
            <td>{element.breed}</td>
            <td>
              <img src={element.dogImage} width={160} height={120} />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default DogTable;
