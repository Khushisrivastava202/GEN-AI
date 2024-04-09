import { Link } from 'react-router-dom';
import logo from '../assets/logoai.png'
import image from '../assets/image.png'
import text from '../assets/Text-sum.png'
import chatpdf from '../assets/chatpdf.png'


export default function Home() {
  return (
    <div>
      <div className='flex flex-col gap-6 sm:mt-40 mt-20 justify-center items-center'>
        <h1 className=' mt-12 text-3xl font-bold lg:text-6xl  bg-gradient-to-r from-purple-500 to-teal-600 text-transparent bg-clip-text'>Welcome to GEN-AI</h1>
        <img className='sm:h-80 sm:w-100 h-50 w-70 sm:mt-10 mt-6 p-2' src={logo} alt='logo'/>
        <p className='text-gray-500 text-md sm:text-lg text-center'>
          Here you can explore a variety of AI tools like Image-Generator ,URL Summarizer,and Chat with PDF which are build using Open-AI .
        </p>
          <h1 className=" mt-5 text-xl font-bold sm:text-3xl bg-gradient-to-r from-purple-500 to-teal-600 text-transparent bg-clip-text">Explore Tools</h1> 
      </div>

      {/* cards */}
      <div className='flex flex-col sm:flex-row p-14 justify-center gap-10 mt-5'>
      {/* cards1 */}
      <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg  transition-all'>
      
        <img src={image} className=' h-[340px] w-full object-cover group-hover:h-[280px] transition-all duration-300 z-20'/>
  
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-center text-md line-clamp-2 text-teal-500'> Create a visually stunning and fully personalized image</p>
        <Link to='https://genai-image.netlify.app/' className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Image Generator
        </Link>
      </div>
    </div>
    {/* card2 */}
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg  transition-all'>
      <Link to='https://genai-summarizer.netlify.app/'>
        <img src={text} className='h-[340px] w-full object-cover group-hover:h-[280px] transition-all duration-300 z-20'/>
      </Link>
      <div className='p-3 flex flex-col gap-2'>
      <p className='text-center text-md line-clamp-2 text-teal-500'>Transrform lenghty article into clear and concise summaries</p>
        <span className='italic text-sm'></span>
        <Link to='https://genai-summarizer.netlify.app/' className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          URL Summarizer
        </Link>
      </div>
    </div>
    {/* card3 */}
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg  transition-all'>
    <img src={chatpdf} className='h-[340px] w-full object-cover group-hover:h-[280px] transition-all duration-300 z-20'/>
      <div className='p-3 flex flex-col gap-2'>
        <Link className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Chat with PDF
        </Link>
      </div>
    </div>    

    </div>


      <div className='sm:p-12 p-6 mt-8 mb-8 '>
      </div>
    </div>
  );
}
