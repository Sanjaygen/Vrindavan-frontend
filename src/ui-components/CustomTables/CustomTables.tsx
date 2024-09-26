import React from "react";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { HeaderContainer, IconDiv, LeftControls, PageButton, PaginationButtons, PaginationContainer, PaginationInfo, PaperContnent, RightControls, SearchContainer, SearchIcon, SearchInput, TableContent } from './CustomTables.styled';
import { DashboardTableProps } from '@/types/inventory';

const CustomTables: React.FC<DashboardTableProps> = ({ columns, rows, onEditClick, onDeleteClick }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState("");

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    setRowsPerPage(parseInt(event.target.value as string, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    columns.some((column) =>
      row[column.accessor]
        ?.toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
  );

  const startEntry = page * rowsPerPage + 1;
  const endEntry = Math.min((page + 1) * rowsPerPage, filteredRows.length);

  return (
    <PaperContnent>
      <HeaderContainer>
        <LeftControls>
          <span style={{ marginRight: "10px" }}>Show</span>
          <FormControl
            variant="outlined"
            size="small"
            style={{ minWidth: 120, marginRight: "10px" }}
          >
            <Select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
          <span>Entries</span>
        </LeftControls>

        <RightControls>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <IconDiv><SearchIcon /></IconDiv>
          </SearchContainer>
        </RightControls>
      </HeaderContainer>
      <TableContainer>
        <TableContent stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  sx={{
                    fontFamily: "Poppins,sans-serif",
                    fontSize: { sm: "12px", md: "17px" },
                    fontWeight: "bold"
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align="left">
                      {column.accessor === 'actions' ? (
                        <div>
                          <FaRegEdit
                            onClick={() => onEditClick(row.id)}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                          />
                          <FaRegTrashAlt
                            onClick={() => onDeleteClick(row.id)}
                            style={{ cursor: 'pointer' }}
                          />
                        </div>
                      ) : (
                        row[column.accessor]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </TableContent>
      </TableContainer>
      <PaginationContainer>
        <PaginationInfo>
          Showing {startEntry} to {endEntry} of {filteredRows.length} entries
        </PaginationInfo>
        <PaginationButtons>
          <PageButton onClick={handlePreviousPage} disabled={page === 0}>
            Previous
          </PageButton>
          <PageButton onClick={handleNextPage} disabled={page >= totalPages - 1}>
            Next
          </PageButton>
        </PaginationButtons>
      </PaginationContainer>
    </PaperContnent>
  );
};

export default CustomTables;
