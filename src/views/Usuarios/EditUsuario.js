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
} from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { ButtonLink } from '../../components/ButtonLinks';

const FormEditUsuarios = () => {

  const token = sessionStorage.getItem('token');
  console.log(token);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cedula = searchParams.get('cedula'); // Retrieve the cedula value
  console.log(cedula);

  const preloadedValues = {
    cedula: "123456"
  }
  const [values, setValues] = useState({
    cedula:'',
    correo:'',
    contra:'',
    nombre:'',
    primerApellido:'',
    segundoApellido:'',
    rol:''
  })
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
}, []); 


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Modificar Usuario del Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Modifique los datos del usuario que desea cambiar
            </p>
            <br/>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Cedula</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    name="cedula"
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
                    <ButtonLink to={"/Usuarios/verUsuarios"} className="btn btn-primary profile-button btn-lg">Modificar Usuario</ButtonLink>
            
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
