import ProfileSidebar from '@/section/ProfileSidebar/ProfileSidebar'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen flex ">
      <ProfileSidebar />
      <div className="basis-[70%] h-full">{children}</div>
    </div>
  )
}
