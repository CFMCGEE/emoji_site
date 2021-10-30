import { Button } from 'react-bootstrap';

const DogImage = ({ dogImage, GetDogImage }) => {
    return ( 

        <div>

            <h2> Dog Image Generator </h2>
           
            <Button variant="primary" onClick={GetDogImage}>Press for a doggy</Button>

            <div> { dogImage !== '' ? <img className="theDogImage" src={ dogImage } alt="doggydog"  /> : '' } </div> 


        </div>

    );
} 

export default DogImage;