import {
  cilPencil,
  cilTrash,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonLink } from '../../components/ButtonLinks'

const TableUsuarios = () => {

  const token = sessionStorage.getItem('token');
  console.log(token);

  const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('http://localhost:8008/usuarios/admins', {
          method: "GET",
          headers: {
            Authorization: token
          }
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
            <strong>Usuarios Activos</strong> 
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Revise los usuarios activos de la aplicación
            </p>
              <CTable hover>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Cedula</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Correo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Telefono</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Rol</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {records.map((list, index) => (
                    <CTableRow>
                      <CTableHeaderCell scope="row" key={index}>id</CTableHeaderCell>
                      <CTableDataCell>{list.cedula}</CTableDataCell>
                      <CTableDataCell>{list.nombre}  {list.primer_apellido}</CTableDataCell>
                      <CTableDataCell>{list.correo}</CTableDataCell>
                      <CTableDataCell>tel</CTableDataCell>
                      <CTableDataCell>{list.rol}</CTableDataCell>
                      <CTableDataCell>
                        <ButtonLink to={{
                                      pathname: "/Usuarios/editarUsuario",
                                      search: `?cedula=${encodeURIComponent(list.cedula)}`
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

export default TableUsuarios

