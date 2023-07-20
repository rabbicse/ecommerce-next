export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <title>Admin</title>
      <body>
        {children}
      </body>
    </html>
    </>
  )
}
