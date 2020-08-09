
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'Next.js Sample Website'

const pageList = [
  {name:"コース案内",path:"./menu"},
  {name:"お店紹介",path:"./about"},
  {name:"アクセス",path:"./access"},
  {name:"スタッフ募集",path:"./recruit"},
]

const  Layout = ({ children, home })=> {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
            <Link href="/">
              <a>
                <img
                  src="/images/main.jpg"
                  className={styles.headerImage}
                  alt={""}
                />
              </a>
            </Link>
            <div className={styles.headerMenu}>
              {pageList.map((page)=>(
                <div>
                <Link href={page.path}>
                  <a className={utilStyles.colorInherit}>{page.name}</a>
                </Link>
                </div>
              ))}    
            </div>  
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout