import { ConfigProvider } from "antd";
import theme from '../theme/themeConfig';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <ConfigProvider theme={theme}>{children}</ConfigProvider>
  )
}
