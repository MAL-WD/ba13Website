import facebook from "../assets/facebook-network-communication-internet-interaction-svgrepo-com.svg"
import tiktok from "../assets/tiktok-svgrepo-com (1).svg"
import whatsapp from "../assets/whatsapp-svgrepo-com.svg"
import instagram from "../assets/instagram-1-svgrepo-com.svg"
const Companies = () => {
    return ( <>
    <div className="flex justify-evenly items-center py-12">
        <button ><a target="_blank" href="https://www.facebook.com/profile.php?id=100068965582474"><img src={facebook} className="max-md:w-12 max-md:h-12 w-20 h-20" alt="" /> </a> </button>
        <button ><a target="_blank" href="https://www.facebook.com/profile.php?id=100068965582474"><img src={tiktok} className="max-md:w-12 max-md:h-12 w-20 h-20" alt="" /> </a> </button>
        <button ><a target="_blank" href="https://www.facebook.com/profile.php?id=100068965582474"><img src={whatsapp} className="max-md:w-12 max-md:h-12 w-20 h-20" alt="" /> </a> </button>
        <button ><a target="_blank" href="https://www.facebook.com/profile.php?id=100068965582474"><img src={instagram} className="max-md:w-12 max-md:h-12 w-20 h-20" alt="" /> </a> </button>
        
        </div>
    
    </> );
}
 
export default Companies;