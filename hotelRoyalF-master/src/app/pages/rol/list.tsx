import {Fragment, useContext, useState} from 'react'
import {Row, Col, Form} from 'react-bootstrap'

import DataTable from 'react-data-table-component'
import {ContentContext} from './context'

export const List = () => {
  const {allData,Actions,one} = useContext(ContentContext),
    [searchValue, setSearchValue] = useState<any>([]),
    [filteredData, setFilteredData] = useState<any>([]),
    handleFilter = (e: any) => {
      const value = String(e.target.value)
      let updatedData: any = []
      setSearchValue(value)

      if (value.length) {
        updatedData = allData.filter((item: any) => {
          const startsWith =
            // item.noInventario.startsWith(value) ||
            // item.noBienSicoin.startsWith(value) ||
            //item.codigo.toLowerCase().startsWith(value.toLowerCase())
            (item.codigo && item.codigo.toLowerCase().startsWith(value.toLowerCase())) ||
           (item.nombre && item.nombre.toLowerCase().startsWith(value.toLowerCase()));

          const includes =
          (item.codigo && item.codigo.toLowerCase().includes(value.toLowerCase())) ||
          (item.nombre && item.nombre.toLowerCase().includes(value.toLowerCase()));
            // item.noInventario.includes(value) ||
            // item.noBienSicoin.includes(value) ||
            //item.codigo.toLowerCase().startsWith(value.toLowerCase()) ||
            

          if (startsWith) {
            return startsWith
          } else if (!startsWith && includes) {
            return includes
          } else return null
        })
        setFilteredData(updatedData)
        setSearchValue(value)
      }
    }

  const basicColumns = [
    {
      name: 'Nombre',
      column: 'nombre',
      selector: (row: any) => row.nombre,
      sortable: true,
      center: true,
      cell: (row: any) => row.nombre,
    },
    {
      name: 'codigo',
      column: 'codigo',
      selector: (row: any) => row.codigo,
      sortable: true,
      center: true,
      cell: (row: any) => row.codigo,
    },
    {
      name: 'Estado',
      column: 'estado',
      sortable: true,
      center: true,
      cell: (row: any) => (
        <>
          {row.estado === 'Activo' ? (
            <div className='text-center text-success'>
              <p>{row.estado}</p>
            </div>
          ) : (
            <div className='text-center text-danger'>
              <p>{row.estado}</p>
            </div>
          )}
        </>
      ),
    },
    // {
    //   name: 'Codigo',
    //   column: 'codigo',
    //   selector: (row: any) => row.descripcion,
    //   sortable: true,
    //   center: true,
    //   cell: (row: any) => row.descripcion,
    // },
    {
      name: 'Acciones',
      sortable: true,
      center: true,
      cell: (row: any) => (
        <>
          <button
            className='btn btn-dark dropdown-toggle btn-sm'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            {/* //esto es el nombre que se puede cambiar  */}
            Settings 
          </button>
          <ul className='dropdown-menu'>
            <button className='dropdown-item' onClick={() => one(row)}>
              Visualizar
            </button>
            {row.idEstado === 1 && (
              <button className='dropdown-item' onClick={() => one(row)}>
                Actualizar
              </button>
            )}
            <button className='dropdown-item' onClick={() => Actions(row)}>
              {row.idEstado === 1 ? 'Desactivar' : 'Activar'}
            </button>
          </ul>
        </>
      ),
    },
  ]

  return (
    <Fragment>
      <Row className='justify-content-end mx-0'>
        <Col className='justify-content-end mt-1' md='4' sm='12'>
          <Form.Group className='pb-6'>
            <Form.Control
              className='dataTable-filter mb-50'
              type='text'
              placeholder={'Buscar'}
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Form.Group>
        </Col>
      </Row>
      <DataTable
        theme='dark'
        noHeader
        highlightOnHover
        pagination
        data={searchValue.length ? filteredData : allData}
        columns={basicColumns}
        className='table-responsive'
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        paginationComponentOptions={{
          rowsPerPageText: 'Filas por pagina',
          rangeSeparatorText: 'de',
        }}
        noDataComponent={'Sin datos'}
      />
    </Fragment>
  )
}

export default List
