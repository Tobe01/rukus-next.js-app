export const metadata = {
  title: 'next.js',
  description: 'Gnerated by Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}