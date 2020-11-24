import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
  
        
      </main>

      <footer className={styles.footer}>

        <button onClick={onClickDo}>Click Me!</button>

        <a
          href="https://www.alwise-studio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <p className={styles.companyName}>  Alwise Studio Inc.</p>
        </a>
      </footer>
    </div>
  )

}


const onClickDo =  ()=>{
  console.log('hello')
}
