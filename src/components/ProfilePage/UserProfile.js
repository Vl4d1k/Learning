import { useState } from "react"
import profile_photo from "./../../assets/profile_logo.png"
import { withAuthRedirect } from "./../../hoc/withAuthRedirect"
import React, { useEffect } from 'react';

const UserProfile = (props) => {
  console.log("UserProfile", props)
  return (
    <main className="profile-page w-full">

      <ProfileHeader />

      <section className="relative py-16 bg-gray-300">

        {props.profile ? <ProfileInfo setUserStatus={props.setUserStatus} status={props.status} profile={props.profile} /> : ""}

      </section>

    </main>
  )
}

const ProfileStatus = (props) => {

  useEffect(() => {
    setStatus(props.status)
  },[props.status])

  const [isEditMode, setEditMode] = useState(false);
  const [status, setStatus] = useState("default status");

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    props.setUserStatus(status)
    setEditMode(false)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  
  return (
    <div className="mb-2 text-gray-700 mt-10">
      <i className="far fa-comment mr-2 text-lg text-gray-500"></i>
      { isEditMode ? 
        <input autoFocus={true} value={status} onChange={onStatusChange} onBlur={deactivateEditMode} type="text" className="focus:outline-none focus:ring focus:border-blue-300 pl-4" /> : 
        <span onDoubleClick={activateEditMode}>{status ? status : "Write new status"}</span>
      }
    </div>)
}

const ProfileInfo = (props) => {
  console.log("props in ProfileInfo: ", props)
  return (
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={props.profile.photos.large ? props.profile.photos.large : profile_photo}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                  style={{ maxWidth: "150px" }}
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    22
                  </span>
                  <span className="text-sm text-gray-500">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    10
                  </span>
                  <span className="text-sm text-gray-500">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    89
                  </span>
                  <span className="text-sm text-gray-500">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
              {props.profile.fullName}
            </h3>
            <ProfileStatus setUserStatus={props.setUserStatus} status={props.status} />
          </div>
          <div className="mt-10 py-10 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-gray-800">
                  Created by Vladik!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileHeader = () => {
  return (
    <section className="relative block" style={{ height: "500px" }}>
      <div
        className="rounded-lgz` absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-50 bg-black"
        ></span>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  )
}

export default withAuthRedirect(UserProfile);
