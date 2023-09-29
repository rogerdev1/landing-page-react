import './ButtonTop.css'


const ButtonTop = () => {


    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        console.log('click')
    }



    return (
        <button className="ButtonTop" onClick={handleClick}>
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    )
}


export default ButtonTop
