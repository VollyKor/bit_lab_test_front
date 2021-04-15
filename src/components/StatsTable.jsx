import queryString from 'query-string';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as req from '../service/axios';
import StatsTableRow from './StatstableRow';

export default function StatsTable() {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const history = useHistory();

  const query = queryString.parse(history.location.search);
  const { pathname } = history.location;

  const maxLimit = query.limit > 50 ? 50 : query.limit;

  useEffect(() => {
    if (page !== query.page) {
      req.getAll(page, maxLimit).then(stats => {
        setTotalPages(data.totalPages);
        setData(stats.data);
        setPage(page);
      });
    }
  }, [query.page]);

  const HandleChange = ({ selected }) => {
    history.push(`${pathname}?page=${selected}&limit=${query.limit}`);
  };

  return (
    <>
      <h2 className="table__title">Users statistics</h2>
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
            <td className="table__head-cell">id</td>
            <td className="table__head-cell">First name</td>
            <td className="table__head-cell">Last name</td>
            <td className="table__head-cell">Email</td>
            <td className="table__head-cell">Gender</td>
            <td className="table__head-cell">IP address</td>
            <td className="table__head-cell">Total clicks</td>
            <td className="table__head-cell">Total page views</td>
          </tr>
        </thead>
        <tbody className="table__body">
          {data && <StatsTableRow data={data} />}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        initialPage={page - 1}
        disableInitialCallback
        onPageChange={HandleChange}
        // containerClassName={s.pagination}
        // pageClassName={s.page_item}
        // activeClassName={s.page_item__active}
        // previousClassName={s.previousButton}
        // nextClassName={s.nextButton}
        // pageLinkClassName={s.page_link}
        // breakLinkClassName={s.ellipsis}
      />
    </>
  );
}
