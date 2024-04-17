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

const TableEmpresas = () => {

  const token = sessionStorage.getItem('token');
  console.log(token);

  const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('http://localhost:8008/empresas', {
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
            <strong>Empresas Activos</strong> 
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Revise las empresas activas de la aplicación
            </p>
              <CTable hover>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Contacto</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {records.map((list, index) => (
                    <CTableRow>
                      <CTableHeaderCell scope="row" key={index}>{list.id_empresa}</CTableHeaderCell>
                      <CTableDataCell>{list.nombre}</CTableDataCell>
                      <CTableDataCell>Falta contacto</CTableDataCell>
                      <CTableDataCell>
                        <ButtonLink to={{
                                      pathname: "/Empresas/editarEmpresa",
                                      search: `?id_empresa=${encodeURIComponent(list.id_empresa)}`
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

export default TableEmpresas

