import { Button } from 'flowbite-react';
import blog from '../assets/webblog.png'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border bg-black border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl text-gray-400'>
                Want to learn more about Technolgies?
            </h2>
            <p className='text-gray-500 my-6'>
            Visit My Blog website to explore latest tech articles.
            </p>
            <a href='https://mern-blog-mtn5.onrender.com/ ' target='_blank'>
            <Button className='w-40 ml-[36%] mt-10' gradientDuoTone="purpleToBlue" size="xl">TechTraverse</Button>
            </a>
        </div>
        <div className="p-8 flex-1">
            <img src={blog} />
        </div>
    </div>
  )
}