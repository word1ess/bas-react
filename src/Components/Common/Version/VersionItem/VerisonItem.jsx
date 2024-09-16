function VersionItem({ property, free, premium }) {
  return (
    <tr>
      <td>{property}</td>
      <td>{typeof free === "object" ? free : <img src={free} alt="" />}</td>
      <td>
        {typeof premium === "object" ? premium : <img src={premium} alt="" />}
      </td>
    </tr>
  );
}

export default VersionItem;
