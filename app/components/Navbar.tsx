import Link from 'next/link';
import Menu from './Menu';
import IMAGE from 'next/image';
import SearchBar from './searchbar';
import NavIcons from './navbaricons';
 
const Navbar = () => {
    return (
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* Mobile*/}
        <div className='md:hidden h-full flex justify-between items-center relative'>
          <Link href="/">Varma</Link>
          <Menu />
        </div>
        {/*bigger screen*/}
        <div className='h-full hidden md:flex justify-between items-center gap-8'>
          <div className='w-1/3 flex items-center gap-4'>
            <IMAGE src="/logo.png" alt="" width={24} height={24}/>
            <Link href="/">Varma</Link>
          </div>
          <div className='w-2/3 flex justify-between items-center gap-8'>
            <SearchBar/>
            <NavIcons/>
          </div>
        </div>
        
      </div>
    );
  }

export default Navbar;