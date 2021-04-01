import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CInput,
  CRow,
  CFormGroup,
  CLabel,
  CFormText,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CInputRadio,
  CSelect
} from '@coreui/react'


import CIcon from '@coreui/icons-react'

import usersData from './UsersData'

const MostraUser = ({children}) => {
  const [usuario, setUsuario] = useState(children);
  const [radiobtn, setRadiobtn] = useState();


  return (
    <CRow>
      <CCol>
        <CCard>
         <CCardHeader>
           🎉
         </CCardHeader>
          <CCardBody>
            <CForm action="" method="post">
              <CFormGroup row className="">
                <CCol>
                  <CLabel htmlFor="nf-username">User Name</CLabel>
                  <CInput
                    type="text"
                    id="nf-username"
                    value={usuario.name}
                    name="nf-username"
                    placeholder="Enter name.."
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol>
                  <CLabel htmlFor="nf-firstname">First Name</CLabel>
                  <CInput
                  about
                    type="text"
                    id="nf-firstname"
                    value={usuario.firstname}
                    name="nf-firstname"
                    onChange={() => {console.log('Ta dando certo?')}}
                    placeholder="Enter first name.."
                  />
                  </CCol>
                <CCol>
                  <CLabel htmlFor="nf-lastname">Last Name</CLabel>
                  <CInput
                  about
                    type="text"
                    id="nf-lastname"
                    value=""
                    name="nf-lastname"
                    placeholder="Enter last name.."
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol>
                  <CLabel htmlFor="nf-email">E-mail</CLabel>
                  <CInput
                  about
                    type="text"
                    id="nf-email"
                    value={usuario.email}
                    name="nf-email"
                    placeholder="Enter e-mail.."
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol>
                  <CLabel htmlFor="nf-phone">Phone number</CLabel>
                  <CInput
                  about
                    type="text"
                    id="nf-phone"
                    value=""
                    name="nf-phone"
                    placeholder="Enter phone number.."
                  />
                </CCol>
                <CCol>
                  <CLabel htmlFor="nf-mobile">Mobile number</CLabel>
                  <CInput
                  about
                    type="text"
                    id="nf-mobile"
                    value=""
                    name="nf-mobile"
                    placeholder="Enter mobile number.."
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol>
                  <CLabel htmlFor="nf-mobile">Expire</CLabel>
                  <CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="yes" onChange={() => {setRadiobtn(true)}}/>
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Yes</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="no" onChange={() => {setRadiobtn(false)}}/>
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">no</CLabel>
                    </CFormGroup>
                  </CFormGroup>
                </CCol>
                {radiobtn ? (
                <CCol>
                  <CLabel htmlFor="nf-mobile">Expire Date</CLabel>
                  <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                </CCol>
                )
                :
                (<CCol>

                </CCol>)
                }
              </CFormGroup>
              <CFormGroup row>
                <CCol>
                  <CLabel htmlFor="select">Status</CLabel>
                  <CSelect custom name="select" id="select" value={usuario.status}>
                    <option value="0"></option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Banned">Banned</option>
                  </CSelect>
                </CCol>
                </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

const User = ({match}) => {
  const user = usersData.find( user => user.id.toString() === match.params.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <CRow >
      <CCol>
      <CTabs activeTab="home">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink data-tab="home">
            {match.params.id === 'add' || !match.params.id ? `User registry` : 'User update'}
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink data-tab="profile">
            Profile
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane data-tab="home">
          <MostraUser>{user}</MostraUser>
        </CTabPane>
        <CTabPane data-tab="profile">
          456
        </CTabPane>

      </CTabContent>
    </CTabs>
      </CCol>
    </CRow>
  )
}

export default User
