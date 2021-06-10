import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  var r=new Date()
  var g=r.getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; NIMANTRAN {g}</p>
      <p>
        <Link href='/about'>About This Project</Link>
      </p>
    </footer>
  )
}
