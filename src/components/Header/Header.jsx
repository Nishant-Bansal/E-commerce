import './Header.css';

export const Header = () => {
    return (
        <>
        <div className="header-container">
            <div className='header-heading-container'>
                My Store
            </div>
            <a href='/about' className='about-us-container'>
                About Us
            </a>
        </div>
        </>
    )
}