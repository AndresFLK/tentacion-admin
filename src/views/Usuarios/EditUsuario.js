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

const FormEditUsuarios = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Agregar Usuarios al Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Llene los datos del usuario que desea agregar
            </p>
            <br/>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Cedula</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Correo Electronico</CFormLabel>
                  <CFormInput
                    type="email"
                    id="exampleFormControlInput2"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Contrasen̄a</CFormLabel>
                  <CFormInput
                    type="password"
                    id="exampleFormControlInput3"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Nombre</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Apellido</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                  />
                </div>
                <br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                    <ButtonLink to={"/Usuarios/verUsuarios"} className="btn btn-primary profile-button btn-lg">Agregar Usuario</ButtonLink>
            
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

export default FormEditUsuarios
