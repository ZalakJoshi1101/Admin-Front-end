import axios from 'axios';
import image1 from '../images/golden.avif';
import image2 from '../images/admin.jpeg';
import React, { useEffect, useState } from 'react';
import { Emp } from './Emp';
import TvSharpIcon from '@mui/icons-material/TvSharp';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import GroupIcon from '@mui/icons-material/Group';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SearchIcon from '@mui/icons-material/Search';

import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import FormPropsTextFields from '../compo/EmpForm'
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';


//oye bhai.. su karyu he te? API copy kari ne mukididhi...ok
export const Allemp = () => {
    const histroy = useHistory()
    const [getempdata, setempdata] = useState([]);
    console.log(getempdata);

    useEffect(() => {
        // Use a function inside the useEffect hook to fetch data
        axios.get("http://localhost:3001/getempdata")
            .then((res) => {
                setempdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // ------------search data
    const search = (el) => {
        const searchdata = (el.target.value);
        axios.get("http://localhost:3001/searchdata?search=" + searchdata)
            .then((res) => {
                setempdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }



    //   -------------For Delete 

    const delet = (el) => {
        axios.delete("http://localhost:3001/deletedata?id=" + el)
            .then((res) => {
                console.log(res.data.message);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <div className='w-100'>
                <div className='flex'>
                    <div className='w-20 scroll'>

                        <div className='logo'>
                            <img src={image1} style={{ height: "70px", width: "180px" }}></img>
                        </div>
                        <div className='adminpic'>
                            <img src={image2} style={{ height: "100px", borderRadius: "50%", marginLeft: "30px" }}></img>
                            <h4>admin pannel</h4>
                            <div className='menu'>
                                <ul style={{ margin: "10px", padding: "0px" }}>
                                    <li ><a href="#" ><TvSharpIcon />Dahsboards</a>
                                        <ul>
                                            <li><a href=''>Analytics</a>
                                                <ul>
                                                    <li><a href=''>Leave</a></li>
                                                    <li><a href=''>Employees</a></li>
                                                    <li><a href=''>On-Trail</a></li>
                                                    <li><a href=''>Work Report</a></li>
                                                    <li><a href=''>Project Summary</a></li>
                                                    <li><a href=''>New Applicants</a></li>
                                                    <li><a href=''>Open Vacancies</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><ContentPasteRoundedIcon />Projects</a>
                                        <ul>
                                            <li><a href=''>All Projects</a></li>
                                            <li><a href=''>Add Projects</a></li>
                                            <li><a href=''>Project Details</a></li>
                                            <li><a href=''>Project's Budget</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><GroupIcon />Employees</a>
                                        <ul>
                                            {/* <li><a href='/Allemployee'>All Employees</a></li> */}
                                            <li><a href='/Allemp'>All Employees</a></li>
                                            <li><a href=''>Employee's Profile</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><CardMembershipIcon />Leave Management</a>
                                        <ul>
                                            <li><a href=''>Leave Request</a></li>
                                            <li><a href=''>Employee Leaves</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><FactCheckIcon />Attendance</a>
                                        <ul>
                                            <li><a href=''>Today's Attandance</a></li>
                                            <li><a href=''>Employee Attandance</a></li>
                                            <li><a href=''>Attandance Sheet</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="#"><SchoolIcon />Leaders</a></li>

                                    <li><a href="#"><SchoolIcon />Hiring</a>
                                        <ul>
                                            <li><a href=''>Vacancy List</a></li>
                                            <li><a href=''>Telephonic</a></li>
                                            <li><a href=''>F2F Call</a></li>
                                            <li><a href=''>Shortlisted </a></li>
                                            <li><a href=''>Trail Session</a></li>
                                            <li><a href=''>Onboarding</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="#"><LogoutIcon />Logout</a></li>
                                </ul>


                            </div>
                        </div>
                    </div>

                    <div className='parent' style={{ background: "whitesmoke", marginTop: "40px" }}>
                        <div className='search'>
                            <ul>
                                <li onClick={search}>
                                    <input type="text" name="" onChange={search} placeholder="Search with name" style={{ height: "40px", width: "250px", borderRadius: '20px', padding: "5px", margin: "5px" }} />
                                </li>
                            </ul>

                        </div>
                        <div className='child'>
                            <table>
                                <tbody>

                                    <tr>
                                        <th>First-Name</th>
                                        <th>Last-name</th>
                                        <th>Gender</th>
                                        <th>Cake-day</th>
                                        <th>Department</th>
                                        <th>Role</th>
                                        <th>E-Mail</th>
                                        <th>Contact</th>
                                        <th>Date-Of-Joint</th>
                                        <th>Refrence</th>
                                        <th>Employee ID</th>
                                        <th>Education</th>
                                        <th>Address</th>
                                        <th>Delete</th>
                                        <th>Edit</th>
                                    </tr>
                                    {
                                        getempdata.map((el, index) => {
                                            return (<Emp fname={el.fname} lname={el.lname} gender={el.gender}
                                                bod={el.bod} dept={el.dept} role={el.role} email={el.email} contact={el.contact} doj={el.doj} Refrence={el.ref} empid={el.empid} edu={el.edu} add={el.add}

                                                delete={<button onClick={() => delet(el._id)}>Delete</button>}

                                                update={<button onClick={() => histroy.push("/Admin/" + el._id)} >Update</button>}
                                            />)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


