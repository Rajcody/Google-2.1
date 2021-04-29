
function Avatar({url,className}) {
    return ( 
            <img
              src={url}
              alt="Picture"
              loading="lazy" 
              className={` h-10 cursor-pointer
               rounded-full 
               transition duration-150
                transform hover:scale-110 ${className}`}
            />
    );              
       
    
}

export default Avatar;
