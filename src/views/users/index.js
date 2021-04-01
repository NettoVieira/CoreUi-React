import React, { useState, useEffect, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import {} from '@coreui/react'


 import usersData from './UsersData'
import CIcon from '@coreui/icons-react';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

function DataTableUsers() {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [users, setUsers] = useState(usersData)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'registered',
      selector: 'registered',
      sortable: true,
      right: true,
    },
    {
      name: 'profile',
      selector: 'profile',
      sortable: true,
      right: true,
    },
    {
      name: 'status',
      selector: 'status',
      sortable: true,
      right: true,
    },
    {
      cell: (item, index) =>
        <button
        style={{border: 'none', backgroundColor: '#fff', color: 'blue'}}
        onClick={() => history.push(`/users/${item.id}`)}
        >
        <CIcon name="cil-pencil" color="blue"></CIcon>
        </button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (item, index) =>
        <button
        style={{border: 'none', backgroundColor: '#fff', color: 'red'}}
        onClick={() => {handleInactiveUser(item, index)}}
        >
          <CIcon name="cil-trash" ></CIcon>
        </button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },

  ];



  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  const handleInactiveUser = useCallback((item, index) => {
    const user = users[index]

    user.status = 'Inactive'

    users[index] = user

    setUsers([...users])
  }, [users])

  return (

    <div style={{ width: '100%' }}>
       <div>
         <button style={{backgroundColor: 'orange'}}>
           <span style={{fontSize: '16px'}}>
             Adicionar
           </span>
         </button>
       </div>
       <DataTable
        data={users}
        noHeader
        columns={columns}
        pagination={true}
        paginationDefaultPage={1}
        paginationPerPage={5}
      />
    </div>
  )
}



export default DataTableUsers
