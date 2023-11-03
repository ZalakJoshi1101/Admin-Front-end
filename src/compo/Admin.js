import React from 'react'
import image1 from '../images/golden.avif';
import image2 from '../images/admin.jpeg';
import { Link } from 'react-router-dom'
import TvSharpIcon from '@mui/icons-material/TvSharp';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import GroupIcon from '@mui/icons-material/Group';
import FactCheckIcon from '@mui/icons-material/FactCheck';

import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import FormPropsTextFields from '../compo/EmpForm'



export const Admin = () => {
  return (
    <div className='w-100'> 
       <div className='flex'>
            <div className='w-20 scroll'>
                <div className='logo'>
                <img src={image1} style = {{height : "70px"  ,width : "180px"}}></img>
                </div>
                <div className='adminpic'>
                <img src={image2} style = {{height : "100px",borderRadius : "50%" ,marginLeft : "30px"}}></img>
            <h4>admin pannel</h4>
                <div className='menu'>
                    <ul style={{margin : "10px", alignItems : "center" , padding : "0px" }}>
                    <li><a href="#">
                        <TvSharpIcon />
                        Dahsboards</a>
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

            <div className='w-80'>
                <div>
                 <FormPropsTextFields />
                </div>
            </div>
       </div>
    </div>
  )
}
