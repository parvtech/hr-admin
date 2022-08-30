import React, { useState, useEffect } from 'react'
import './Profile.css'
import Proimg from "../../assests/proimg.png"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'
import axios from 'axios'

export default function Profile() {

    let {id} =  useParams()
    const [employeedetail, setEmployeedetail] = useState([]);
    const [image, setImage] = useState(null)
  let navigate = useNavigate()
    useEffect(() => {
        getEmployeList()
    }, []);

    // onclick function
    const profileDetail = (public_id) => {
        console.log(public_id)
        navigate(`/profile/${public_id}`)

    }
    // fetch api
    const getEmployeList = () => {
        let url = process.env.REACT_APP_BASEURL + `employee/${id}/`
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
                "Authorization": "Bearer " + '6160b016c6c20ad11a915fc97a6f21d4a252a408acfbfb30f245be0e560da6764942c23da7a6b64c1cb37907def338621af493cee41ceaa2b619dad37324b5a0ebed8fd75f0a2ed44204b56ebbd8833f18010044f2f8683'
            }
        };
        axios.get(url, config)
            .then(res => {
                setEmployeedetail(res.data.data)
                setImage(res.data.data.avatar)
                console.log(res.data.data)
            }
            ).catch(err => {

            })
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col h3book'><h2>Profile </h2></div>
                </div>
                <div className='.b3medium'><h4 >Dashboard<span className='text-muted'><span> / </span>Profile </span></h4></div>
                <div className='col'>
                    <div className="card  card-box mb-3" >
                        <div className="row ">
                            <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                            <div className="col-md-5 mt-5 mx-5 profile_img">
                                {(image == '' || image == null) ?
                                    <img src={require("../../assests/avatar.png")} alt="logo" width="70px" height="70px" className='mt-2 mr-2' style={{ borderRadius: "50%" }}></img> :
                                    <img src={image} alt="logo" width="70px" height="70px" className='mt-3 mr-1' style={{ borderRadius: "50%" }}></img>
                                }
                            </div>
                            <div className="col-md-8 ">
                                <div className="card-body row">
                                    <h5 className="card-title pb-0 pt-0 h2bold text-capitalize">{employeedetail.name ? <span>{employeedetail.name}</span>:"N/A"}</h5>
                                    <div className='card-text col wrapper_1'>
                                        <dl className='row'>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Designation  :</dt><dd className="col-sm-8 c2book text-gry">{employeedetail.designation ? <span>{employeedetail.designation}</span> : "N/A"}</dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Department   :</dt><dd className="col-sm-8 c2book text-gry"> UI/UX Design Team</dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Employee ID  :</dt><dd className="col-sm-8 c2book text-gry"> {employeedetail.emp_id ? <span>{employeedetail.emp_id}</span> : "N/A"}</dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Date of Join :</dt><dd className="col-sm-8 c2book text-gry"> {employeedetail.date_of_joining ? <span>{employeedetail.date_of_joining}</span> : "N/A"}</dd>
                                        </dl>
                                    </div>
                                    <div className='card-text col'>
                                        <dl className='row'>
                                            <dt className="col-sm-4 c1book  text-content pb-0 mb-0">Phone     : </dt><dd className="col-sm-8 c2book"><Link to="" className='text-decoration-none'>{employeedetail.mobile_no ? <span>{employeedetail.mobile_no}</span> : "N/A"}</Link></dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Email     : </dt><dd className="col-sm-8 c2book"><Link to="" className='text-decoration-none'>{employeedetail.email ? <span>{employeedetail.email}</span> : "N/A"}</Link></dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Birthday  : </dt><dd className="col-sm-8 c2book text-gry">{employeedetail.date_of_birth ? <span>{employeedetail.date_of_birth}</span> : "N/A"}</dd>
                                            <dt className="col-sm-4 c1book text-content pb-0 mb-0">Gender    :</dt><dd className="col-sm-8 c2book text-gry"> {employeedetail.gender ? <span>{employeedetail.gender}</span> : "N/A"}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col '>
                            <div className="card mb-3 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Personal Informations</h5>
                                            <div className='card-text col '>
                                                <dl className='row'>

                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">UAN number     </dt><dd className="col-sm-8 c2book text-gry"> {employeedetail.uan_no ? <span>{employeedetail.uan_no}</span> : "N/A"}</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Tel             </dt><dd className="col-sm-8 c2book"> <Link to="" className='col-sm-4   text-decoration-none'>9876543210</Link></dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Nationality    </dt><dd className="col-sm-8 c2book text-gry"> {employeedetail.nationality ? <span>{employeedetail.nationality}</span> : "N/A"}</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Religion       </dt><dd className="col-sm-8 c2book text-gry">  {employeedetail.religion ? <span>{employeedetail.religion}</span> : "N/A"}</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Marital status  </dt><dd className="col-sm-8 c2book text-gry"> {employeedetail.martital_status ? <span>{employeedetail.status}</span> : "N/A"}</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Aadhar card     </dt><dd className="col-sm-8 c2book text-gry"> {employeedetail.aadhar_no ? <span>{employeedetail.aadhar_no}</span> : "N/A"}</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Pan card        </dt><dd className="col-sm-8 c2book text-gry">{employeedetail.pan_no ? <span>{employeedetail.pan_no}</span> : "N/A"}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 py-2 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Bank information</h5>
                                            <div className='card-text col '>
                                                <dl className='row'>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Name as in Bank  </dt><dd className="col-sm-8 c2book text-gry"> ICICI Bank</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Bank Name        </dt><dd className="col-sm-8 c2book text-gry"> 159843014641</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">IFSC Code        </dt><dd className="col-sm-8 c2book text-gry"> ICI24504</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Bank account no   </dt><dd className="col-sm-8 c2book text-gry">159843014641</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Bank Address     </dt><dd className="col-sm-8 c2book text-gry"> ICI24504</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card py-5 mb-1  card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title py-2 pb-2 pt-0 b1bold text-content" > Address</h5>
                                            <div className='card-text col '>
                                                <h6 className='b2book text-content'>Present Address</h6>
                                                <dl className='row'>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Flat/Door No    </dt><dd className="col-sm-8 c2book text-gry"> 105</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Floor            </dt><dd className="col-sm-8 c2book text-gry">1ST</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Premises Name    </dt><dd className="col-sm-8 c2book text-gry">Rituraaj Business center/</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Landmark (near)  </dt><dd className="col-sm-8 c2book text-gry">UNO Business park building/</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Dist, Pin Code   </dt><dd className="col-sm-8 c2book text-gry">452003/</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">State           </dt><dd className="col-sm-8 c2book text-gry"> Madhya Pradesh/</dd>
                                                </dl>
                                            </div>
                                            <hr />
                                            <div className='card-text col '>
                                                <h6 className='b2book text-content'>Present Address</h6>
                                                <dl className='row'>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Flat/Door No    </dt><dd className="col-sm-8 c2book text-gry"> 105</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Floor            </dt><dd className="col-sm-8 c2book text-gry">1ST</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Premises Name    </dt><dd className="col-sm-8 c2book text-gry">Rituraaj Business center/</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Landmark (near)  </dt><dd className="col-sm-8 c2book text-gry">UNO Business park building/</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Dist, Pin Code   </dt><dd className="col-sm-8 c2book text-gry">452003/</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">State           </dt><dd className="col-sm-8 c2book text-gry"> Madhya Pradesh/</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col'>
                            <div className="card mb-3 pb-1 py-0 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Education Informations</h5>
                                            <div className='card-text col '>
                                                <p className='c1black text-gry pb-0 mb-0'>International College of Arts and Science (UG)</p>
                                                <p className='c1black text-gry pb-0 mb-0'>Bsc Computer Science</p>
                                                <p><small className=' c3black mute-gry pb-0 mb-0'>2000 - 2003</small></p>
                                                <p className="c1black pb-0 mb-0 text-content">International College of Arts and Science (PG)</p>
                                                <p className='c1black text-gry pb-0 mb-0'>Msc Computer Science</p>
                                                <p><small className=' c3black mute-gry pb-0 mb-0'>2000 - 2003</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card mb-3 pb-5 py-3 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Family Informations</h5>
                                            <div className='card-text col '>
                                                <table className="table ">
                                                    <tr>
                                                        <th className='c1book text-content pb-0 mb-0 '>Name</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Relationship</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Date of Birth</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Occupation</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Phone</th>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0'>Leo</td>
                                                        <td className='c1book text-gry pb-0 mb-0'>Brother</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Feb 16th, 2019</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Clerk</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>9876543210</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0'>Leo</td>
                                                        <td className='c1book text-gry pb-0 mb-0'>Brother</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Feb 16th, 2019</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Clerk</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>9876543210</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0'>Leo</td>
                                                        <td className='c1book text-gry pb-0 mb-0'>Brother</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Feb 16th, 2019</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Clerk</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>9876543210</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="card mb-3 py-0 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Experience</h5>
                                            <div className='card-text col '>
                                                <p className='pb-0 mb-0 text-gry c1book'>Web Designer at Zen Corporation</p>
                                                <p className='pb-0 mb-0 text-gry  '><small style={{ fontSize: "11px", lineHeight: "16px" }}>Jan 2013 - Present (5 years 2 months)</small></p>
                                                <p className='pb-0 mb-0 text-gry c1book'>Web Designer at Ron-tech</p>
                                                <p className='pb-0 mb-0 text-gry  '><small style={{ fontSize: "11px", lineHeight: "16px" }}>Jan 2013 - Present (5 years 2 months)</small></p>
                                                <p className='pb-0 mb-0 text-gry c1book'>Jan 2013 - Present (5 years 2 months)</p>
                                                <p className='pb-0 mb-0 text-gry  '><small style={{ fontSize: "11px", lineHeight: "16px" }}>Jan 2013 - Present (5 years 2 months)</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card mb-3 pb-5 py-1 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Languages Known</h5>
                                            <div className='card-text col '>
                                                <table className="table ">
                                                    <tr>
                                                        <th className='c1book text-content px-4'>Languages</th>
                                                        <th className='c1book text-content px-4'>Read</th>
                                                        <th className='c1book text-content px-4'>Speak</th>
                                                        <th className='c1book text-content px-4'>Write</th>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0 px-4' >English</td>
                                                        <td className='c1book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                        <td className='c2book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                        <td className='c2book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0 px-4' >Hindi</td>
                                                        <td className='c1book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                        <td className='c2book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                        <td className='c2book text-gry pb-0 mb-0 px-4'>Yes</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="card mb-3 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" > Emergency Contact</h5>
                                            <div className='card-text col '>
                                                <h6 className='c2medium text-content'>Contact 1</h6>
                                                <dl className='row'>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Name    </dt><dd className="col-sm-8 c2book text-gry"> John Doe</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Relationship           </dt><dd className="col-sm-8 c2book text-gry">Father</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Phone    </dt><dd className="col-sm-8 c2book text-gry">9876543210, 9876543210</dd>
                                                </dl>
                                            </div>
                                            <hr />
                                            <div className='card-text col '>
                                                <h6 className='c2medium text-content'>Contact 2</h6>
                                                <dl className='row'>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Name    </dt><dd className="col-sm-8 c2book text-gry"> John Doe</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Relationship           </dt><dd className="col-sm-8 c2book text-gry">Father</dd>
                                                    <dt className="col-sm-4 c1book text-content pb-0 mb-0">Phone    </dt><dd className="col-sm-8 c2book text-gry">9876543210, 9876543210</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card mb-3 card-box" >
                                <div className="row ">
                                    <span className='text-end ps-5 pe-4'><button className='penbtn  mx-2 px-2 ps-2'><FaPen className='pen'></FaPen></button></span>
                                    <div className="col-md-8">
                                        <div className="card-body row">
                                            <h5 className="card-title pb-2 pt-0 b1bold text-content" >Family Informations</h5>
                                            <div className='card-text col '>
                                                <table className="table ">
                                                    <tr>
                                                        <th className='c1book text-content pb-0 mb-0 '>Name</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Relationship</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Date of Birth</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Occupation</th>
                                                        <th className='c1book text-content pb-0 mb-0 '>Phone</th>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0'>Leo</td>
                                                        <td className='c1book text-gry pb-0 mb-0'>Brother</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Feb 16th, 2019</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Clerk</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>9876543210</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0'>Leo</td>
                                                        <td className='c1book text-gry pb-0 mb-0'>Brother</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Feb 16th, 2019</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Clerk</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>9876543210</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='c1book text-gry pb-0 mb-0'>Leo</td>
                                                        <td className='c1book text-gry pb-0 mb-0'>Brother</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Feb 16th, 2019</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>Clerk</td>
                                                        <td className='c2book text-gry pb-0 mb-0'>9876543210</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
