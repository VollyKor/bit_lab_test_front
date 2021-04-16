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

  const GraphSize = () => {
    const windowSize = window.innerWidth;

    let width = 0;
    let height = 0;

    if (windowSize > 1180) {
      width = 1000;
      height = 400;
    } else if (windowSize > 780) {
      width = 600;
      height = 200;
    } else if (windowSize > 380) {
      width = 300;
      height = 150;
    }

    return {
      width,
      height,
    };
  };

  // const { first_name, last_name } = userData;
  const { id = 1 } = match.params;
  const numberId = Number(id);

  useEffect(() => {
    if (!isNaN(numberId)) {
      getDataById(numberId).then(data => {
        console.log(data);
        setData(data.data);
        setUser(data.data[0]);
      });
    }
  }, [numberId]);

  return user ? (
    <>
      <div>
        <h2 className="user__title">{`${user.first_name} ${user.last_name}`}</h2>
      </div>
      <div className="graph">
        <h3 className="user__subtitle">Clicks</h3>
        <LineChart
          width={GraphSize().width}
          height={GraphSize().height}
          data={data}
        >
          <CartesianGrid vertical={false} stroke="#F1F1F1" />
          <Line
            type="monotone"
            dataKey="clicks"
            strokeWidth={4}
            stroke="#3A80BA"
          />
          <Tooltip />
          <Legend />
          <XAxis dataKey="date" />
          <YAxis dataKey="clicks" />
        </LineChart>
      </div>
      <div className="graph">
        <h3 className="user__subtitle">Vievs</h3>
        <LineChart
          width={GraphSize().width}
          height={GraphSize().height}
          data={data}
        >
          <CartesianGrid vertical={false} stroke="#F1F1F1" />
          <Line
            type="monotone"
            strokeWidth={4}
            legendType="plainline"
            dataKey="page_views"
            stroke="#3A80BA"
          />
          <Tooltip />
          <Legend />
          <XAxis dataKey="date" />
          <YAxis dataKey="page_views" />
        </LineChart>
      </div>
    </>
  ) : (
    <div>UserId is not a valid number or data is absent</div>
  );
}
