import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getDataById, getDataByDate } from '../service/axios';
import DatePicker from 'react-datepicker';
import getGraphSize from '../service/getGraphSize';
import Loader from './Loader';
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
  const [isLoading, setIsLoading] = useState(true);

  const [startDateFrom, setStartDateFrom] = useState(new Date('2019-10-15'));
  const [startDateTo, setStartDateTo] = useState(new Date('2019-10-21'));

  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  const match = useRouteMatch();

  const { id = 1 } = match.params;
  const numberId = Number(id);

  function getFormattedData(dateObj) {
    return dateObj.toISOString().substring(0, 10);
  }

  useEffect(() => {
    if (!isNaN(numberId)) {
      getDataById(numberId)
        .then(({ data, user }) => {
          // for filtering data only from back

          setStartDateFrom(new Date(data[0].date));
          setStartDateTo(new Date(data[data.length - 1].date));

          setUser(user);
          setData(data);

          setIsLoading(false);
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

  return isLoading ? (
    <Loader />
  ) : (
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
          width={getGraphSize().width}
          height={getGraphSize().height}
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
          width={getGraphSize().width}
          height={getGraphSize().height}
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
  );
}
