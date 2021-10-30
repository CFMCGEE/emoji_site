import { Button } from 'react-bootstrap';

const FunnyImage = ({ memeTmp, GetMemeTemplate }) => {

    return ( 

        <div>

            <h2> Meme Template Generator </h2>
           
            <Button variant="secondary" onClick={GetMemeTemplate}>Press for a meme template</Button>

            <div> { memeTmp !== '' ? <img className="memeSize" src={ memeTmp }  alt="funnypicture" /> : '' } </div> 

        </div>

    );
} 

export default FunnyImage;
