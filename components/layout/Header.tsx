import {FaSearch} from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Listing App</h1>
            <nav className='flex items-center justify-between gap-5'>
              <div className='px-4 py-2 rounded bg-white text-black flex items-center w-64'>
                <FaSearch className="inline-block mr-2" />
                <input type="text" className='h-full outline-0 bg-transparent'/>
              </div>
              <a>Sign Up</a>
              <a>Sign In</a>
              <a>Accomodation</a>
            </nav>
        </div>
    </header>
  );
}
export default Header;