import ProfileForm from '@/section/ProfileForm/ProfileForm'
import SettingsForm from '@/section/SettingsForm/SettingsForm'
import React from 'react'

function Settings() {
  return (
    <div className="cartItem px-4 py-8 overflow-y-auto">
      <div className="pb-4">
        <h2 className="font-semibold text-lg">Password Settings</h2>
      </div>
      <SettingsForm />
    </div>
  )
}

export default Settings
