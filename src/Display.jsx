import React, { useContext, useState } from 'react'
import {Button, Table} from 'react-bootstrap'
import './display.css'
import { creatContext } from './useData'
function Display() {
const data=useContext(creatContext)
const {std}=data

  return (
    <div>
         <Table className='table' striped bordered hover>
      <thead>
        <tr >
          <th  style={{padding:'20px '}}>name</th>
          <th style={{padding:'20px '}} >course</th>
          <th style={{padding:'20px '}}>qualification</th>
          <th style={{padding:'20px '}}>show</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{padding:'20px '}}>abc</td>
          <td style={{padding:'20px '}}>Mark</td>
          <td style={{padding:'20px '}}>Otto</td>
          <td style={{padding:'20px '}}>@mdo</td>
          <td><Button>show</Button></td>
        </tr>
      </tbody>
    </Table>
    {
        std.map((data)=>
        {
            return(
                <div>
                    <h1> {data.name} </h1>
                </div>
            )
        }
        
        )
    }
    </div>
  )
}

export default Display