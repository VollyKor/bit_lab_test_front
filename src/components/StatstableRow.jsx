import { useHistory, useRouteMatch } from 'react-router-dom';

export default function StatsTableRow({ data }) {
  const history = useHistory();
  const match = useRouteMatch();

  function handleClick(e) {
    history.push(`${match.url}/user/${e.user_id}`);
  }
  return data.map(e => {
    return (
      <tr className="table__body-row" key={e.id} onClick={() => handleClick(e)}>
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
