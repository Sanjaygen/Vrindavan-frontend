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
import { HeaderContainer, LeftControls, PageButton, PaginationButtons, PaginationContainer, PaginationInfo, RightControls, SearchContainer, SearchIcon, SearchInput } from './CustomTables.styled';
import { DashboardTableProps } from '@/types/inventory';

const CustomTables: React.FC<DashboardTableProps> = ({ columns, rows, onEditClick }) => {
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
      row[column.id]
        ?.toString()
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
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "image" ? (
                          <img
                            src={value as string}
                            alt="Image"
                            style={{ width: '50px', height: '50px' }}
                          />
                        ) : column.id === "updatedAt" ? (
                          new Date(value as string).toLocaleDateString()
                        ) : column.id === "action" ? (
                          <>
                            <FaRegEdit
                              style={{
                                cursor: "pointer",
                                marginRight: 8,
                                color: "#007bff",
                              }}
                              onClick={() => onEditClick(row.sNo)} // Call with the row ID
                            />
                            <FaRegTrashAlt
                              style={{ cursor: "pointer", color: "#dc3545" }}
                            />
                          </>
                        ) : column.format && typeof value === "number" ? (
                          column.format(value)
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationContainer>
        <PaginationInfo>
          {`Showing ${startEntry} to ${endEntry} of ${filteredRows.length} entries`}
        </PaginationInfo>
        <PaginationButtons>
          <PageButton onClick={handlePreviousPage} disabled={page === 0}>
            Previous
          </PageButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageButton
              key={index}
              active={index === page}
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </PageButton>
          ))}
          <PageButton
            onClick={handleNextPage}
            disabled={page === totalPages - 1}
          >
            Next
          </PageButton>
        </PaginationButtons>
      </PaginationContainer>
    </Paper>
  );
};

export default CustomTables;
