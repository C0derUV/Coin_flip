import React, { Dispatch, SetStateAction } from "react";
import Index from "../../../container/Index";
interface paginationInterface {
  page: number;
  rowsPerPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  count: number;
}
export default function Pagination(props: paginationInterface) {
  const { page, rowsPerPage, setPage, setRowsPerPage, count } = props;
  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Index.Box className="pagination-main">
      <Index.TablePagination
        component="div"
        rowsPerPageOptions={[10, 50, 100]}
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Index.Box>
  );
}
