import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles['title-homepage']}>Welcome Shit.Code</h1>
    </Layout>
  )
}

export default Home
