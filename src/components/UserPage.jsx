import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getDataById } from '../service/axios';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

export default function SinglePage() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  const match = useRouteMatch();

  // const { first_name, last_name } = userData;
  const { id = 1 } = match.params;
  const numberId = Number(id);
  console.log(numberId);

  useEffect(() => {
    if (typeof numberId !== NaN) {
      getDataById(id).then(data => {
        console.log(data.data[0]);
        setData(data.data);
        setUser(data.data[0]);
      });
    }
  }, [id]);

  return user ? (
    <>
      <div>
        <h2 className="user__title">{`${user.first_name} ${user.last_name}`}</h2>
      </div>
      <div className="graph">
        <h3 className="user__subtitle">Clicks</h3>
        <LineChart width={1000} height={400} data={data}>
          <CartesianGrid vertical={false} stroke="#F1F1F1" />
          <Line
            type="monotone"
            dataKey="total_click"
            strokeWidth={4}
            stroke="#3A80BA"
          />
          <Tooltip />
          <Legend />
          <XAxis dataKey="date" />
          <YAxis dataKey="total_click" />
        </LineChart>
      </div>
      <div className="graph">
        <h3 className="user__subtitle">Vievs</h3>
        <LineChart width={1000} height={400} data={data}>
          <CartesianGrid vertical={false} stroke="#F1F1F1" />
          <Line
            type="monotone"
            strokeWidth={4}
            legendType="plainline"
            dataKey="total_page_views"
            stroke="#3A80BA"
          />
          <Tooltip />
          <Legend />
          <XAxis dataKey="date" />
          <YAxis dataKey="total_page_views" />
        </LineChart>
      </div>
    </>
  ) : (
    <div>UserId is not a valid number or data is absent</div>
  );
}
