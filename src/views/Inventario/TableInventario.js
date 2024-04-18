import {
  cilPencil,
  cilTrash,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { ButtonLink } from '../../components/ButtonLinks'

const TableInventario = () => {

  const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('http://localhost:8008/productos', {
          method: "GET",
        })
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(error => console.error('Error al consumir la API:', error));
    }, []); // The empty array causes this effect to only run on mount


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Items Activos del Inventario</strong> 
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Revise los items activos de la aplicación
            </p>
              <CTable hover>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Descripcion</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Cantidad</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Precio Unitario</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Proveedores</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {records.map((list, index) => (
                    <CTableRow>
                      <CTableHeaderCell scope="row" key={index}>{list.id_producto}</CTableHeaderCell>
                      <CTableDataCell>{list.nombre}</CTableDataCell>
                      <CTableDataCell>{list.descripcion}</CTableDataCell>
                      <CTableDataCell>{list.cantidad}</CTableDataCell>
                      <CTableDataCell>{list.precio}</CTableDataCell>
                      <CTableDataCell>
                        <>
                          {list.proveedores.map((proveedor, index) => (
                            <span key={index}>
                              {proveedor}{index < list.proveedores.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </>
                      </CTableDataCell>
                      <CTableDataCell>
                      <ButtonLink to={{
                                      pathname: "/Inventario/editarItem",
                                      search: `?id_producto=${encodeURIComponent(list.id_producto)}`
                                    }}
                          className="btn btn-info profile-button"
                        >
                          <CIcon icon={cilPencil} className="me-2" />
                          Editar
                        </ButtonLink>
                        <span> </span>
                        <ButtonLink to={"/Usuarios/editarUsuario"} className="btn btn-danger profile-button">
                          <CIcon icon={cilTrash} className="me-2" />
                          Borrar
                        </ButtonLink>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TableInventario

