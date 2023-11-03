import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';


import * as Yup from "yup";
let specificDate = Date(2022, 0, 1)

const EmpformSchema = Yup.object().shape({
  // fname's validation
  fname: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),

  //lname
  lname: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),

  //email
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),

  //contact
  contact: Yup.number()
    .typeError('plz enter only number')
    .required('Required'),

  // date
  bod: Yup.date()
    .required('Required'),

  doj: Yup.date()
    .required('Required'),

  //add
  add: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),

    //education
  edu: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),

  //refrence
  ref: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),

  // department...
  dept: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),

  //role
  role: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),

});


export default function FormPropsTextFields() {
  const params = useParams()
  console.log(params.id);
  const [olddata, setolddata] = useState({
    fname: "",
    lname: "",
    gender: "Male",
    bod: "",
    dept: "",
    role: "",
    email: "",
    contact: "",
    doj: "",
    ref: "",
    empid: "",
    edu: "",
    add: ""
  });

  console.log(olddata);


  console.log(params.id);
  useEffect(() => {
    axios.get("http://localhost:3001/findid?id=" + params.id)
      .then((res) => {
        setolddata(res.data.data[0])
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  // ----------
  const history = useHistory();
  return (

    <div>
      <Formik
        initialValues={olddata}
        enableReinitialize={true}

        validationSchema={EmpformSchema}
        onSubmit={async (values) => {
          console.log(values);
          if (params.id) {
            axios.patch("http://localhost:3001/updatedata?id=" + params.id, values)
              .then((res) => {
                console.log(res.data);
                history.push("/Allemp")
              })
              .catch((error) => {
                console.log(error);
              })
          } else {
            console.log("hiii");
            console.log(values);
            axios.post("http://localhost:3001/createempdata", values)
              .then(function (res) {
                console.log(res.data.data);
                history.push("/Allemp") //mohit sir 
              })
              .catch(function (error) {
                console.log(error);
              })
          }
        }
        }>
        <>

          <Form>
            <h1 style={{ margin: "10px", fontFamily: "monospace", color: "rgb(124, 157, 150)" }}>Employee Profile</h1>

            <div className='flex flex-wrap'>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>First-name
                </label>

                <Field id="fname" name="fname" placeholder="First name" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} />
                <div className="error-box">
                  <ErrorMessage name="fname" />
                </div>
              </div>


              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Last-name
                </label>
                <Field id="lname" name="lname" placeholder="Last name" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} /><br />
                <div className="error-box">
                  <ErrorMessage name="lname" />
                </div>
              </div>
            </div>
            {/* ---------- */}

            <div className='flex flex-wrap'>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Cake day
                </label>
                <Field id="bod" name="bod" type="date" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} /><br />
                <div className="error-box">
                  <ErrorMessage name="bod" />
                </div>

              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Date of joint
                </label>
                <Field id="doj" name="doj" type="date" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} /><br />
                <div className="error-box">
                  <ErrorMessage name="doj" />
                </div>
              </div>

            </div>


            {/* ------------- */}
            <div className='flex flex-wrap'>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Department
                </label>
                <Field id="dept" name="dept" placeholder="Department" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} /><br />
                <div className="error-box">
                  <ErrorMessage name="dept" />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Role
                </label>
                <Field id="role" name="role" placeholder="Role of Employee" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} />
                <div className="error-box">
                  <ErrorMessage name="role" />
                </div>
              </div>
              <br />
            </div>
            {/* -------------------- */}

            <div className='flex flex-wrap'>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Email
                </label>
                <Field type="email" id="email" name="email" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} />
                <div className="error-box">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Contact
                </label>
                <Field type='tel' id="contact" name="contact" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} />
                <div className="error-box">
                  <ErrorMessage name="contact" />
                </div>
              </div>
            </div>

            {/* ------------ */}

            <div className='flex flex-wrap'>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Refrence
                </label>
                <Field id="ref" name="ref" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} />
                <div className="error-box">
                  <ErrorMessage name="ref" />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Employee ID
                </label>
                <Field id="empid" name="empid" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} /><br />
                <div className="error-box">
                  <ErrorMessage name="empid" />
                </div>
              </div>
            </div>


            <div className='flex flex-wrap'>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Education
                </label>
                <Field id="edu" name="edu" style={{ height: "40px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} /><br />
                <div className="error-box">
                  <ErrorMessage name="edu" />
                </div>
              </div>


              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{
                  width: "80%", padding: "0px 20px", marginTop: "10px",
                  marginBottom: "0ch", fontSize: "13px", color: "grey"
                }}>Address
                </label>
                <Field id="add" name="add" style={{ height: "100px", width: "220px", margin: "20px", borderRadius: "15px", border: "none", background: "rgb(219 224 213)" }} /><br />
                <div className="error-box">
                  <ErrorMessage name="add" />
                </div>
              </div>
            </div>
            {/* ----------------- */}
            <button type="submit" style={{ height: "50px", fontWeight: "400", fontSize: "20px", width: "130px", background: "#7aa495", color: "whitesmoke", borderRadius: "10px", border: "0ch", margin: "20px" }}>Submit</button>

            {/* ---------close button -- remain to code */}
            <div class="callout" data-closable>
              <button class="close-button" aria-label="Close alert" type="button" data-close>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

          </Form>
        </>
      </Formik>
    </div>

  );
}



