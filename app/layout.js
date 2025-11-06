export const metadata = {
  title: 'Myntra Winter Jacket Finder',
  description: 'Find the best winter jackets under ₹2000 on Myntra',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
