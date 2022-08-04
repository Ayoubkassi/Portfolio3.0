import { useState } from 'react'
import { Title , Main , Container } from './Repo.styles';
import { DataGrid } from '@mui/x-data-grid';



const columns = [
  { field: 'name', headerName: 'Title', width: 180 },
  {
    field: 'description',
    headerName: 'Description',
    width: 257,
    editable: true,
  },
  {
    field: 'language',
    headerName: 'Language',
    width: 140,
    editable: true,
  },
  {
    field: 'created_at',
    headerName: 'Created at',
    width: 150,
    editable: true,
  },
  {
    field: 'forks',
    headerName: 'Forks',
    width: 80,
    editable: true,
  },
  {
    field: 'issues',
    headerName: 'Issues',
    width: 80,
    editable: true,
  },
  {
    field: 'size',
    headerName: 'Size (kb)',
    width: 110,
    editable: true,
  },
  {
    field: 'stars',
    headerName: 'Stars',
    description: 'This column has the value of each project',
    sortable: false,
    width: 80,
  },
];






const Repo = () => {

  const [projects , setProjects ] = useState(null);

  return (
    <Main>
      <Container>
      <Title>Software Repository</Title>
      <div style={{ height: 740, width: '100%', paddingBottom: "70px",paddingTop: "10px" }}>
      <DataGrid
        rows={projects}
        columns={columns}
        pageSize={10}
        //checkboxSelection
        //disableSelectionOnClick
        style= {{color: '#212529' ,     fontSize: '0.8rem',
        fontWeight: '400',
        lineHeight: '1.5' }}
      />
      </div>

      </Container>
    </Main>
  )
}

export default Repo;
