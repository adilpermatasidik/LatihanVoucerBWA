import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Layout from '../components/Layout'


const Home: NextPage = () => {
  return (
    
    <Layout pageTitle="Home Page">
      <h1 className={styles['title-homepage']}>Welcome Shit.Code</h1>
      <Image src="/image/gambar-anak-1.jpg" width={400} height={300} alt="photo anak"/>
      <p>Pernahkah terlintas oleh kita anak sekecil Aira sudah di tinggal oleh Ayahnya karena sakit, anak yang belum mengerti apa arti ditinggal/meninggal. </p>
      <Image src="/image/gambar-rumah-1.jpg" width={400} height={300} alt="photo rumah 1"/>
      <p>Aira hidup bersama Ibu, kakak perempuan, dan adiknya yang masih balita berumur 4 bulan. Dirumah yang jauh dari kata layak. Jauh dari kata nyaman dikarenakan sering bocor saat hujan. Semenjak ditinggal pergi Ayahnya Ibu Aira mencari nafkah dengan cara dagang ala-ala warung kecil di depan rumah. Yang sama-sama kita tau warung kecil seringkali jarang pembelinya apalagi dipedesaan seperti tempat tinggalnya Aira.</p>
      <Image src="/image/gambar-keluarga-1.jpg" width={400} height={300} alt="photo anak 2"/>
      <p>Aira dan sekeluarga tinggal didaerah KP Nagrog RT 001 RW 009 Desa Sukahaji Kec.Cipeundeuy Kab. Bandung Barat. Keseharian Aira layaknya anak kecil yang sering bermain. Namun ada kebiasaan yang bagus kalo Aira sering membantu Ibunya ketika sedang melipat dan merapihkan baju.</p>
      <Image src="/image/gambar-rumah-2.jpg" width={400} height={300} alt="photo rumah 2"/>
    </Layout>
   
  )
}

export default Home
