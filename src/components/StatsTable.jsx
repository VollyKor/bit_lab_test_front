import queryString from 'query-string';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as req from '../service/axios';
import StatsTableRow from './StatstableRow';
import { ReactComponent as Logo } from '../styles/images/arrow-pagination.svg';

export default function StatsTable() {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const history = useHistory();

  const query = queryString.parse(history.location.search);
  const { pathname } = history.location;
  const { limit = 30 } = query;

  const maxLimit = limit > 50 ? 50 : limit;

  useEffect(() => {
    if (page !== query.page) {
      req.getAll(page, maxLimit).then(stats => {
        setTotalPages(stats.totalPages);
        setData(stats.data);
        setPage(page);
      });
    }
  }, [query.page]);

  const HandleChange = ({ selected }) => {
    setPage(selected + 1);
    history.push(`${pathname}?page=${selected + 1}&limit=${limit}`);
  };

  return (
    <>
      <h2 className="table__title">Users statistics</h2>
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
            <td className="table__head-cell id">id</td>
            <td className="table__head-cell">First name</td>
            <td className="table__head-cell">Last name</td>
            <td className="table__head-cell email">Email</td>
            <td className="table__head-cell gender">Gender</td>
            <td className="table__head-cell ip_address">IP address</td>
            <td className="table__head-cell">Total clicks</td>
            <td className="table__head-cell">Total page views</td>
          </tr>
        </thead>
        <tbody className="table__body">
          {data && <StatsTableRow data={data} />}
        </tbody>
      </table>
      {data && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          initialPage={query.page - 1}
          disableInitialCallback
          onPageChange={HandleChange}
          containerClassName="paginate__container"
          pageClassName="paginate__page"
          activeClassName="paginate__page active"
          nextLabel={<Logo className="paginate_arrow right" />}
          previousLabel={<Logo className="paginate_arrow" />}
          breakClassName="paginate__page"
        />
      )}
    </>
  );
}
