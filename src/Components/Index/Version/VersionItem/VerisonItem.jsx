function VersionItem({ property, free, premium }) {
  return (
    <tr>
      <td>{property}</td>
      <td>
        <img src={free} alt="" />
      </td>
      <td>
        <img src={premium} alt="" />
      </td>
    </tr>
  );
}

export default VersionItem;
