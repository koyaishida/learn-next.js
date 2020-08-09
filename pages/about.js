import Link from 'next/link'
import Layout from "../components/layout"

export default  function About ({props}){
  console.log(props,"about")
  return (
    <Layout>
      <div>
        <h2>Aboutコンポーネントですマジで</h2>
        <Link href="/">
              <a>← ホームへ戻る</a>
        </Link>
      </div>
    </Layout>
   
  )
}


export async function getStaticProps(props) {
  // Fetch necessary data for the blog post using params.id
  return {
    props: {
     props
    }
  }
}