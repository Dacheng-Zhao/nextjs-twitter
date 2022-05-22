import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid grid-cols-9'>
        <SideBar />
        <Feed tweets={tweets}  />
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    }
  }
}
