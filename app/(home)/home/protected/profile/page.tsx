import ProfileForm from '@/section/ProfileForm/ProfileForm'
import React from 'react'

function Profile() {
  return (
    <div className="cartItem px-4 py-8 overflow-y-auto">
       <div className="pb-4">
         <h2 className="font-semibold text-lg">Profile Information</h2>
       </div>
      <ProfileForm />
    </div>
  )
}

export default Profile
