import { GoHome } from 'react-icons/go'
import { IoIosRadio } from 'react-icons/io'
import { HiMiniSquares2X2 } from 'react-icons/hi2'
import apple from '../logos/music.svg'

const LeftBar = () => {
  return (
    <div>
      <div className="ms-4 pt-4 pb-3">
        <div className="d-flex align-items-center">
          <img src={apple} alt="" />
        </div>
        <div className="d-flex align-items-center">
          <GoHome className="text-danger" style={{ fontSize: '40px' }} />
          <h6 className="text-light">Home</h6>
        </div>
        <div className="d-flex align-items-center">
          <IoIosRadio className="text-danger" style={{ fontSize: '40px' }} />
          <h6 className="text-light">Novità</h6>
        </div>
        <div className="d-flex align-items-center">
          <HiMiniSquares2X2
            className="text-danger"
            style={{ fontSize: '40px' }}
          />
          <h6 className="text-light">Radio</h6>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
