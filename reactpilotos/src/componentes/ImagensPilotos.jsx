import Charles from '../assets/Charles.png';
import Hamilton from '../assets/Hamilton.png';
import Kimi from '../assets/Kimi.png';
import Russell from '../assets/Russell.png';

function ImagensPilotos() {
  return (
    <>
      <div className='orgF'>
        <div className='hamiltonf'>
          <a href="https://www.formula1.com/en/drivers/lewis-hamilton" target="_blank">
            <img src={Hamilton} className="lw" />
          </a>
        </div>
        <div className='charlesf'>
          <a href="https://www.formula1.com/en/drivers/charles-leclerc" target="_blank">
            <img src={Charles} className="cl" />
          </a>
        </div>
      </div>

      <div className='orgM'>
        <div className='kimi'>
          <a href="https://www.formula1.com/en/drivers/kimi-antonelli" target="_blank">
            <img src={Kimi} className="km" />
          </a>
        </div>
        <div className='russell'>
          <a href="https://www.formula1.com/en/drivers/george-russell" target="_blank">
            <img src={Russell} className="gr" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ImagensPilotos;
