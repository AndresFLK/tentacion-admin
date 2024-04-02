import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import React from 'react'
import { ButtonLink } from '../../components/ButtonLinks'

const FormAddItem = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Agregar Items al Inventario</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Llene los datos del item que desea agregar
            </p>
            <br/>
            <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Nombre</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Precio</CFormLabel>
                  <CFormInput
                    type="email"
                    id="exampleFormControlInput2"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Cantidad</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput3"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Proveedores</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                  />
                </div>
                <br/><br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                  <ButtonLink to={"/Usuarios/verUsuarios"} className="btn btn-info profile-button btn-lg">Agregar Item</ButtonLink>
            
                  </div>
                </div>
                <br/>
              </CForm>
            
          </CCardBody>
        </CCard>
      </CCol>
      
    </CRow>
  )
}

export default FormAddItem
