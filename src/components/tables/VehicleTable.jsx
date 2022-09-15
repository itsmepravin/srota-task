const VehicleTable = ({ allVehicles }) => {
  // Getting all the keys to render as table headings
  const allVehiclesKeys = Object.keys(allVehicles[0]);
  return (
    <table style={{ textAlign: "center", width: "1080px" }}>
      <thead>
        {allVehiclesKeys.map((element) => (
          <td>{element.toUpperCase()}</td>
        ))}
      </thead>
      {allVehicles.map((element) => (
        <tbody>
          <tr>
            <td>{element.brand}</td>
            <td>{element.carDescription}</td>
            <td>{element.model}</td>
            <td>{element.totalDistanceCovered}</td>
            <td>
              <img src={element.vehicleImage} width={160} height={120} />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default VehicleTable;
