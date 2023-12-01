import { useMemo } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import {
  DataGrid,
  DataGridProps,
  GridRowsProp,
  GridColDef,
} from '@mui/x-data-grid';
import { pipe, prop, toLower } from 'ramda';

const columnDef: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 200 },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    valueFormatter: pipe(prop('value'), toLower),
  },
  { field: 'phone', headerName: 'Phone', width: 200 },
];

export type UserTableProps = Omit<DataGridProps, 'columns'> & {
  onRowEdit: (row: any) => void;
  onRowDelete: (row: any) => void;
};

export default function UserTable(props: UserTableProps) {
  const { rows, onRowEdit, onRowDelete } = props;

  const dataRows: GridRowsProp = useMemo(() => {
    return [...rows];
  }, [rows]);

  const dataCols = useMemo(() => {
    const actionColDef: GridColDef = {
      field: 'actions',
      headerName: '',
      renderCell: (params) => (
        <Stack direction="row">
          <IconButton
            size="small"
            onClick={() => onRowEdit(params.row)}
          >
            <Edit />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => onRowDelete(params.row)}
          >
            <Delete />
          </IconButton>
        </Stack>
      ),
    };
    return [actionColDef].concat(columnDef);
  }, []);

  return (
    <Box sx={{ height: '75vh' }}>
      <DataGrid
        hideFooter
        rows={dataRows}
        columns={dataCols}
      />
    </Box>
  );
}
