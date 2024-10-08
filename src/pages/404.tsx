// File: pages/404.tsx

import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">
        <a>Go back to home</a>
      </Link>
      <style jsx>{`
        .container {
          text-align: center;
          padding: 100px 20px;
        }
        h1 {
          font-size: 48px;
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          margin-bottom: 30px;
        }
        a {
          color: #0070f3;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}