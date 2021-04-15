export default function StatsTableRow({ data }) {
  return data.map(e => {
    return (
      <tr className="table__body-row" key={e.id}>
        <td className="table__body-cell">{e.id}</td>
        <td className="table__body-cell">{e.first_name}</td>
        <td className="table__body-cell">{e.last_name}</td>
        <td className="table__body-cell">{e.email}</td>
        <td className="table__body-cell">{e.gender}</td>
        <td className="table__body-cell">{e.ip_adress}</td>
        <td className="table__body-cell">{e.total_click}</td>
        <td className="table__body-cell">{e.total_page_views}</td>
      </tr>
    );
  });
}
