import { Button } from 'react-bootstrap';

const CatImage = ({ catImage, GetCatImage }) => {
    return ( 

        <div>

            <h2> Cat Image Generator </h2>
           
            <Button variant="success" onClick={GetCatImage}>Press for some pussy</Button>

            <div> { catImage !== '' ? <img className="theCatImage" src={ catImage } alt="kittycat"  /> : '' } </div> 


        </div>

    );
} 

export default CatImage;