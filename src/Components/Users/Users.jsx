import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

import './users.css'
const Users = () => {

  const [gender, setGender] = useState("all")
  const data = useSelector((state) => state);

  useEffect(() => {

  }, [gender])

  const [userdata, setUserdata] = useState([...data.usersData])



  return (
    <>

      <div className='users'>
        <h1>Users Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis vel molestiae minima, incidunt modi totam assumenda repellendus accusamus dolorum vero aspernatur ullam! Eius officiis maiores consectetur praesentium quae velit tempore ad quo. Reiciendis tempora deserunt voluptatum rem non numquam, nihil optio, temporibus, consectetur iusto deleniti alias odit assumenda qui.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis vel molestiae minima, incidunt modi totam assumenda repellendus accusamus dolorum vero aspernatur ullam! Eius officiis maiores consectetur praesentium quae velit tempore ad quo. Reiciendis tempora deserunt voluptatum rem non numquam, nihil optio, temporibus, consectetur iusto deleniti alias odit assumenda qui.
        </p>

        <div className="gender">
          <input value="all" checked={gender === "all"} type="radio" onChange={(e) => {
            setGender(e.target.value)
          }} /><label>ALL</label>

          <input value="male" type="radio" checked={gender === "male"} onChange={(e) => {
            setGender(e.target.value)
          }} /><label>Male</label>

          <input value="female" type="radio" checked={gender === "female"} onChange={(e) => {
            setGender(e.target.value)
          }} /><label>Female</label>
        </div>

        <div className="topusersCardContainer">
          <div className="IMAGE">
            <p>IMAGE</p>
          </div>
          <div className="NAME">
            <p>NAME</p>
          </div>
          <div className="EMAIL">
            <p>EMAIL</p>
          </div>
          <div className="GENDER">
            <p>GENDER</p>
          </div>
        </div>

        {userdata &&
          (gender !== "all"
            ? userdata
              .filter((ele) => ele.gender === gender)
              .map((ele) => {
                return (
                  <div className="usersCard">
                    <div className="IMAGE">
                      <img src={ele && ele.picture.large} alt="" />
                    </div>
                    <div className="NAME">
                      <p>{ele && ele.name.first}</p>
                    </div>
                    <div className="EMAIL">
                      <p>{ele && ele.email}</p>
                    </div>
                    <div className="GENDER">
                      <p>{ele && ele.gender}</p>
                    </div>
                  </div>
                );
              })
            : userdata.map((ele) => {
              return (
                <div className="usersCard">
                  <div className="IMAGE">
                    <img src={ele && ele.picture.large} alt="" />
                  </div>
                  <div className="NAME">
                    <p>{ele && ele.name.first}</p>
                  </div>
                  <div className="EMAIL">
                    <p>{ele && ele.email}</p>
                  </div>
                  <div className="GENDER">
                    <p>{ele && ele.gender}</p>
                  </div>
                </div>
              );
            }))}


      </div>
    </>
  )
}

export default Users