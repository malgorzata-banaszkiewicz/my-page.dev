import { Image } from "../Image/Image"
import Programing from '../../assets/binary-2904980_1920.jpg' 
import Bike from '../../assets/woman-2711279_1920.jpg'
import Mountains from '../../assets/mountain-landscape-2031539_1920.jpg'

export const MainPage: React.ElementType = () => {
    return(
    <>
        <div>
            <h1>Page contents 🚀</h1>
            <span>Page about Małgorzata Banaszkiewicz. Junior Front-end Developer. Nature lover. Active person. Dreaming about travelling.</span>
        </div>

        <Image src={Programing} alt='programming'>
        </Image>

        <Image src={Bike} alt='woman on a bike with a doggy'>
        </Image>

        <Image src={Mountains} alt='flowery path to the snowy mountains'>
        </Image>
        
    </>
)}