import React from 'react'
import MaterialTable from 'material-table'

   
function Home(){
  const data=[
      { name:'Ramesh',age:12},
      {name:'Suresh',age:15} ,
      {name:'Dhruva',age:13},
      {name:'Ram',age:22},
      {name:'Shyam',age:26}
    ]
  const colums=[
              {title:'Name',field:'name'},
              {title:'Age',field:'age'}
            ]
     return(

      <div >
          <MaterialTable title='Material Table'
          data={data}
          columns={colums}
          // options={{
          //   search:false,
          //   paging:false,
          //   filtering:true,
          //   exportButton:true
          // }}
          />
      </div>
  )
}

export default  Home

   