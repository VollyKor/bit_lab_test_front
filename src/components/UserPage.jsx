import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getDataById, getDataByDate } from '../service/axios';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

//  example of unvalid data
// ====================================
// axios
//   .get('http://localhost:3010/stats/5?dateFrom=2010-10-01&dateTo=2019-10-3')
//   .then(
//     res => console.log('e', res),
//     err => alert(`Message from server: ${err.response.data.message}`),
//   );

export default function SinglePage() {
  const [startDateFrom, setStartDateFrom] = useState(new Date());
  const [startDateTo, setStartDateTo] = useState(new Date());
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  const match = useRouteMatch();

  const { id = 1 } = match.params;
  const numberId = Number(id);

  function getFormattedData(dateObj) {
    return dateObj.toISOString().substring(0, 10);
  }

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

  useEffect(() => {
    if (!isNaN(numberId)) {
      getDataById(numberId)
        .then(({ data }) => {
          setStartDateFrom(new Date(data[0].date));
          setStartDateTo(new Date(data[data.length - 1].date));

          setData(data);
          setUser(data[0]);
        })
        .catch(e => console.log(e));
    }
  }, [numberId]);

  function handleClick() {
    getDataByDate(
      numberId,
      getFormattedData(startDateFrom),
      getFormattedData(startDateTo),
    ).then(({ data }) => {
      setData(data);
    });
  }

  return user ? (
    <>
      <div className="date">
        <h2 className="user__title">{`${user.first_name} ${user.last_name}`}</h2>
        <div className="date__wrapper">
          <div>
            <span className="date__desc">From</span>
            <DatePicker
              closeOnScroll={true}
              selected={startDateFrom}
              selectsStart
              className="date__input"
              onChange={date => {
                setStartDateFrom(date);
              }}
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div>
            <span className="date__desc">to</span>
            <DatePicker
              closeOnScroll={true}
              selected={startDateTo}
              selectsEnd
              onChange={date => {
                setStartDateTo(date);
              }}
              dateFormat="yyyy-MM-dd"
              className="date__input"
            />
          </div>
          <button className="date__btn" onClick={handleClick}>
            Filter
          </button>
        </div>
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
