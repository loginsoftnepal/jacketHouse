import ProfileAvatar from '@/section/ProfileAvatar/ProfileAvatar'
import ProfileForm from '@/section/ProfileForm/ProfileForm'
import { authOptions } from '@/server/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

async function fetchProfile(userId: number){
   const res = await fetch(`${process.env.SERVER_URL}/api/profile/${userId}`, {
     method:'GET'
   })

  if(!res.ok) {
    throw new Error('Failed to fetch Profile data.');
  }

  return res.json();
}
async function Profile() {
   const session = await getServerSession(authOptions);
    const profile = await fetchProfile((session?.user as any).id);

  return (
    <div className="cartItem px-4 py-8 overflow-y-auto">
      <div className="px-2 py-4">
        <ProfileAvatar image={session?.user?.image} />
      </div>
      <div className="pb-4">
        <h2 className="font-semibold text-lg">Profile Information</h2>
      </div>

      <ProfileForm profile={profile.profile} />
    </div>
  )
}

export default Profile
