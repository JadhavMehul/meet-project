import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase';

export default function Home() {
    const firebase = useFirebase();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [district, setDistrict] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (password === rePassword) {
                firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
                    var userDetail = {
                        email: email,
                        password: password,
                        district: district,
                    };
                    firebase.firestore().collection("users").doc(email).set(userDetail);
                    setEmail("")
                    setPassword("")
                    setRePassword("")
                    setDistrict("")
                    alert("User Created Succesfully")
                })
            } else {
                alert("password and confirm password are not same")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="container">
                <form className="box mx-auto m-5" onSubmit={handleSubmit}>
                    <h1> 
                        New Entry
                    </h1>
                    
                    <input type="email" placeholder="Enter Email id" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="Create a Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <input type="password" placeholder="Re-enter Type Password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} required/>

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
                    
                    <button className="btn btn-light" type="submit">Register</button>

                    {/* <h1 className="btn btn-light" style={{color: "black"}} onClick={handleSubmit}>Register</h1> */}
                </form>
            </div>
        </>
    )
}
