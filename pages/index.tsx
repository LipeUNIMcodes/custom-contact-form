import type { NextPage } from 'next'
import ContactForm from '../components/ContactForm'

const Home: NextPage = () => {
  return (
    <div className='min-w-screen min-h-screen flex justify-center items-center'>
      <div className='w-full max-w-6xl px-2'>
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
}

export default Home
