import React from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import {
  HeaderContainer,
  LeftControls,
  PageButton,
  PaginationButtons,
  PaginationContainer,
  PaginationInfo,
  RightControls,
  SearchContainer,
  SearchIcon,
  SearchInput
} from './CustomTables.styled';
import { DashboardTableProps, Column } from '@/types/inventory';

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
      (row[column.accessor] as string)
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
  );

  const startEntry = page * rowsPerPage + 1;
  const endEntry = Math.min((page + 1) * rowsPerPage, filteredRows.length);

  return (
    <Paper style={{ width: '100%', overflow: 'hidden' }}>
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
              label="Entries"
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
          </SearchContainer>
          <SearchIcon />
        </RightControls>
      </HeaderContainer>
      <TableContainer style={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
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
        </Table>
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
    </Paper>
  );
};

export default CustomTables;
