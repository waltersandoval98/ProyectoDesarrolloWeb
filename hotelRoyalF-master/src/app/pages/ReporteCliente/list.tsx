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
            //item.NombreCliente.toLowerCase().startsWith(value.toLowerCase())
            (item.Nombrecliente && typeof item.Nombrecliente === 'string' && item.Nombrecliente.toLowerCase().startsWith(value.toLowerCase())) ||
            (item.habitacion && typeof item.habitacion === 'string' && item.habitacion.toLowerCase().startsWith(value.toLowerCase())); //||
            //(item.Cliente && typeof item.Cliente === 'string' && item.Cliente.toLowerCase().startsWith(value.toLowerCase())) ||
            //(item.nit && typeof item.nit === 'string' && item.nit.toLowerCase().startsWith(value.toLowerCase()));


          const includes =
          (item.Nombrecliente && typeof item.Nombrecliente === 'string' && item.Nombrecliente.toLowerCase().includes(value.toLowerCase())) ||
          (item.habitacion && typeof item.habitacion === 'string' && item.habitacion.toLowerCase().includes(value.toLowerCase()));
          //(item.NombreCliente && typeof item.NombreCliente === 'string' && item.NombreCliente.toLowerCase().includes(value.toLowerCase())) ||
          //(item.nit && typeof item.nit === 'string' && item.nit.toLowerCase().includes(value.toLowerCase()));
      
            // item.noInventario.includes(value) ||
            // item.noBienSicoin.includes(value) ||
            //item.NombreCliente.toLowerCase().startsWith(value.toLowerCase())
            

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

    /*Encabezado de cada factura*/ 

  const basicColumns = [
    {
      name: 'IdPersona',
      column: 'IdPersona',
      selector: (row: any) => row.IdPersona,
      sortable: true,
      center: true,
      cell: (row: any) => row.IdPersona,
    },
    {
      name: 'Nombrecliente',
      column: 'Nombrecliente',
      selector: (row: any) => row.Nombrecliente,
      sortable: true,
      center: true,
      cell: (row: any) => row.Nombrecliente,
    },
     {
       name: 'habitacion',
       column: 'habitacion',
       selector: (row: any) => row.habitacion,
       sortable: true,
       center: true,
       cell: (row: any) => row.habitacion,
     },
    {
      name: 'sumaPrecio',
      column: 'sumaPrecio',
      selector: (row: any) => row.sumaPrecio,
      sortable: true,
      center: true,
      cell: (row: any) => row.sumaPrecio,
    },
    // {
    //   name: 'Total',
    //   column: 'Total',
    //   selector: (row: any) => row.Total,
    //   sortable: true,
    //   center: true,
    //   cell: (row: any) => row.Total,
    //   },
    // // {
    //   name: 'Fecha Salida',
    //   column: 'FechaSalida',
    //   selector: (row: any) => row.FechaSalida,
    //   sortable: true,
    //   center: true,
    //   cell: (row: any) => row.FechaSalida,
    // },
    // {
    //   name: 'Total',
    //   column: 'Total',
    //   selector: (row: any) => row.Total,
    //   sortable: true,
    //   center: true,
    //   cell: (row: any) => row.Total,
    // },
    // {
    //   name: 'Fecha',
    //   column: 'Fecha',
    //   selector: (row: any) => row.fecha,
    //   sortable: true,
    //   center: true,
    //   cell: (row: any) => row.fecha,
    // },
    // {
    //   name: 'Nombre Vendedor',
    //   column: 'nombrePersona',
    //   selector: (row: any) => row.nombrePersona,
    //   sortable: true,
    //   center: true,
    //   cell: (row: any) => row.nombrePersona,
    // },
    // {
    //   name: 'Estado',
    //   column: 'estado',
    //   sortable: true,
    //   center: true,
    //   cell: (row: any) => (
    //     <>
    //       {row.estado === 'Activo' ? (
    //         <div className='text-center text-success'>
    //           <p>{row.estado}</p>
    //         </div>
    //       ) : (
    //         <div className='text-center text-danger'>
    //           <p>{row.estado}</p>
    //         </div>
    //       )}
    //     </>
    //   ),
    // },
    // {
    //   name: 'Codigo',
    //   column: 'codigo',
    //   selector: (row: any) => row.descripcion,
    //   sortable: true,
    //   center: true,
    //   cell: (row: any) => row.descripcion,
    // },
    // {
    //   name: 'Acciones',
    //   sortable: true,
    //   center: true,
    //   cell: (row: any) => (
    //     <>
    //       <button
    //         className='btn btn-dark dropdown-toggle btn-sm'
    //         type='button'
    //         data-bs-toggle='dropdown'
    //         aria-expanded='false'
    //       >
    //         {/* //esto es el nombre que se puede cambiar  */}
    //         Settings 
    //       </button>
    //       <ul className='dropdown-menu'>
    //         <button className='dropdown-item' onClick={() => one(row)}>
    //           Visualizar
    //         </button>
    //         {row.idEstado === 1 && (
    //           <button className='dropdown-item' onClick={() => one(row)}>
    //             Actualizar
    //           </button>
    //         )}
    //         <button className='dropdown-item' onClick={() => Actions(row)}>
    //           {row.idEstado === 1 ? 'Desactivar' : 'Activar'}
    //         </button>
    //       </ul>
    //     </>
    //   ),
    // },
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
