import { AnimatedSign } from "./AnimatedSign";
import OrangeStar from '../../assets/star-6-128.png';
import DarkPurpleStar from '../../assets/star-6-128 (1).png';
import RedStar from '../../assets/star-6-128 (2).png';
import LightPurpleStar from '../../assets/star-6-128 (3).png';
import YellowStar from '../../assets/star-6-128 (4).png';
import { RotatingStar } from "./RotatingStar";
import { AnimationContainer } from "./AnimationContainer";


export const AboutMe: React.ElementType = () => (
    <>
    <h1>Why programming? 👩</h1>
    <span>I have decided to walk the path of a Front-end Developer because I have always been good with languages and I like to create. Building a skeleton, making it pretty, and giving   it life provide me with great satisfaction. My professional goal is to achieve perfection in HTML, CSS, JavaScript and React.</span>
    <AnimationContainer>
        <AnimatedSign>NO PAIN NO GAIN</AnimatedSign>
        
        <RotatingStar 
        src={OrangeStar} alt='orange star'>
        </RotatingStar>

        <RotatingStar 
        src={DarkPurpleStar} alt='dark purple star'>
        </RotatingStar>

        <RotatingStar 
        src={RedStar} alt='red star'>
        </RotatingStar>

        <RotatingStar 
        src={LightPurpleStar} alt='light purple star'>
        </RotatingStar>

        <RotatingStar 
        src={YellowStar} alt='yellow star'>
        </RotatingStar>

    </AnimationContainer>
    </>
)