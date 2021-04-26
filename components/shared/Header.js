import Link from 'next/link'

const Header = () => {
    return (
     <>
        <Link href = "/"> Home </Link>
        <Link href = "/about"> About </Link>
        <Link href = "/cv"> CV </Link>
        <Link href = "/blogs"> Blogs </Link>
        <Link href = "/portfolios"> Portfolio </Link>
     </>
    )
  }
  export default Header