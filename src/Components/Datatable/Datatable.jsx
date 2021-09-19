import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import styles from './Mystyle.module.css';
import { BsFillPersonFill } from 'react-icons/bs';


export default function Datatable() {

    const [tableData, setTableData] = useState([]);

    useEffect(()=>{

        axios.get("http://localhost:8082/contact/getall")
        .then(response =>{
            console.log(response.data);
            setTableData(response.data);
        })
        .catch(error=>{
            throw error;
        })

    },[])

    return (
        <div>
            <center>
            <Table responsive >
            {/* <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                   
                </tr>
            </thead> */}
            <tbody>
                {tableData.map(element=>{
                    return (
                        <tr>
                            <td><BsFillPersonFill/></td>
                            <td>{element.name}</td>
                            <td>{element.mobile1}</td>
                            
                        </tr>
                    )
                })}
            </tbody>
            </Table>
            </center>
        </div>
    )
}
