import Link from 'next/link'
import Layout from '@/components/Layout'

/**
 * A custom 404 page that displays a friendly error message with a link to
 * go back to the home page.
 *
 * @return {ReactElement} The custom 404 page component.
 */
export default function Custom404() {
  return (
    <Layout>
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link href="/">
          <a>Go back to home</a>
        </Link>
      </div>
    </Layout>
  )
}