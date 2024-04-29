import GoogleAnalytics from '@/components/GoogleAnalytics'
import { AppProps } from 'next/app'
import { Mulish } from 'next/font/google'
import 'node_modules/highlight.js/styles/github-dark-dimmed.min.css'
import '/src/styles/global.css'

const mulish = Mulish({
  weight: ['400', '500', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={mulish.className}>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </div>
  )
}
