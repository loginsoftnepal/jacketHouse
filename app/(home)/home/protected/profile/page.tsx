import ProfileAvatar from '@/section/ProfileAvatar/ProfileAvatar'
import ProfileForm from '@/section/ProfileForm/ProfileForm'
import React from 'react'

function Profile() {
  return (
    <div className="cartItem px-4 py-8 overflow-y-auto">
      <div className='px-2 py-4'>
         <ProfileAvatar />
      </div>
       <div className="pb-4">
         <h2 className="font-semibold text-lg">Profile Information</h2>
       </div>
       
      <ProfileForm />
    </div>
  )
}

export default Profile
