import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

export default function ModifyEntry() {
    const firebase = useFirebase();
    const history = useHistory();

    const BlogData = useSelector(state => state.firestore.ordered.users);
    useFirestoreConnect([
        {
            collection: "users",
        }
    ])

    const [password, setPassword] = useState("")
    const [district, setDistrict] = useState("")
    const [token, setToken] = useState("")

    const modifyEntry = (e) => {
        e.preventDefault();
        const verifyToken = BlogData.find(element => element.id === token);
        const verifyDistrict = BlogData.find(element => element.district === district);
        const verifyPassword = BlogData.find(element => element.password === password);
        if (!verifyToken) {
            alert("user dosent exist");
        } else {
            if (!verifyDistrict) {
                alert("user dosent exist");
            } else {
                if (!verifyPassword) {
                    alert("user dosent exist");
                } else {
                    history.push("/informationPage")
                }
            }
        }

    }

    if (!BlogData) {
        return (
            <div className="mx-auto">
                <i className="fa fa-spinner fa-spin"></i> Loading ...
            </div>
        )
    } 

    return (
        <>
            <div className="container">
                <form className="box mx-auto m-5" onSubmit={modifyEntry}>
                    <h2> 
                        Modify Entry
                    </h2>

                    <select type="text" placeholder="Enter District" value={district} onChange={(e) => setDistrict(e.target.value)} required >
                        <option value="--Select District--">--Select District--</option>
                        <option value="Akola">Akola</option>
                        <option value="Amaravati">Amaravati</option>
                        <option value="Aurangabad">Aurangabad</option>
                        <option value="Beed">Beed</option>
                        <option value="Bhandara">Bhandara</option>
                        <option value="Buldhana">Buldhana</option>
                        <option value="Chandrapur">Chandrapur</option>
                        <option value="Dhule">Dhule</option>
                        <option value="Gadchiroli">Gadchiroli</option>
                        <option value="Gondia">Gondia</option>
                        <option value="Hingoli">Hingoli</option>
                        <option value="Jalgaon">Jalgaon</option>
                        <option value="Jalna">Jalna</option>
                        <option value="Kolhapur">Kolhapur</option>
                        <option value="Latur">Latur</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Mumbai Sub-urban District">Mumbai Sub-urban District</option>
                        <option value="Nagar">Nagar</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Nanded">Nanded</option>
                        <option value="Nandurbar">Nandurbar</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Palghar">Palghar</option>
                        <option value="Parbhani">Parbhani</option>
                        <option value="Pune">Pune</option>
                        <option value="Raigad">Raigad</option>
                        <option value="Ratnagiri">Ratnagiri</option>
                        <option value="Sangli">Sangli</option>
                        <option value="Satara">Satara</option>
                        <option value="Sindhudurga">Sindhudurga</option>
                        <option value="Solapur">Solapur</option>
                        <option value="Thane">Thane</option>
                        <option value="Usmanabad">Usmanabad</option>
                        <option value="Vardha">Vardha</option>
                        <option value="Washim">Washim</option>
                        <option value="Yavatmal">Yavatmal</option>
                    </select>
                    
                    {/* <input type="email" placeholder="Enter Email id" value={email} onChange={(e) => setEmail(e.target.value)} required/> */}
                    <input type="text" placeholder="Token Number" value={token} onChange={(e) => setToken(e.target.value)} required/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                    
                    
                    <button className="btn btn-light" type="submit">Modify Entry</button>

                    {/* <h1 className="btn btn-light" style={{color: "black"}} onClick={handleSubmit}>Register</h1> */}
                </form>
            </div>
        </>
    )
}
