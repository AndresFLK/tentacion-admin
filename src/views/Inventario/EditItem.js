import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import React from 'react'
import { ButtonLink } from '../../components/ButtonLinks'

const FormEditItem = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Modificar Items del Inventario</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Modifique los datos del item 
            </p>
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
                  <ButtonLink to={"/Usuarios/verUsuarios"} className="btn btn-info profile-button btn-lg">Modificar Item</ButtonLink>
            
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

export default FormEditItem
