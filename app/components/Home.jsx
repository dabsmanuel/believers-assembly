import Image from 'next/image'
import Link from 'next/link'
import Form from "./Form"
import text from "../../public/assets/text.png"

const Home = () => {
  return (
    <div className='lg:flex lg:h-screen'>
      <div id="title" className='lg:w-[50vw] px-4'>
        <Image src={ text } alt="text" priority />      
      </div>
      <div>
        <Form/>
      </div>
    </div>
  )
}

export default Home