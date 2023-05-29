import { useState } from "react";
import { ButtonContainer } from "./ButtonContainer";
import { MailButton } from "./MailButton";


export const Contact: React.ElementType = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const news = (event: React.MouseEvent <HTMLButtonElement, MouseEvent>) => { event.preventDefault(), isClicked ? setIsClicked(false) : setIsClicked(true)};
    const monkey = isClicked ? '🙈' : '🙉';
    const [isBadNews, setIsBadNews] = useState<boolean>(false);
    const fire = (event: React.MouseEvent <HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(), isBadNews? setIsBadNews(false) : setIsBadNews(true)};
    const [isGoodNews, setIsGoodNews] = useState<boolean>(false);
    const sky = (event: React.MouseEvent <HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(), isGoodNews? setIsGoodNews(false) : setIsGoodNews(true)};
    const thumbUp = isGoodNews ? '👍' : '';

    return (
        <>

            <h1>Contact me by mail 📪</h1>
            <span>Email: mbanaszkiewicz@itpanda.pl</span>
            <ButtonContainer backgroundBadNews={isBadNews}>
                <MailButton 
                    onClick={(event:React.MouseEvent <HTMLButtonElement, MouseEvent>)=>{news(event); sky(event)}}>Send good news
                </MailButton>
                <MailButton 
                    onClick={(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{news(event); fire(event)}}>Send bad news
                </MailButton>
                {monkey}
                {thumbUp}
            </ButtonContainer>
            
        </>
    )
}