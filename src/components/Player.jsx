import { CiShuffle } from 'react-icons/ci'
import { MdOutlineSkipPrevious } from 'react-icons/md'
import { CiPlay1 } from 'react-icons/ci'
import { MdOutlineSkipNext } from 'react-icons/md'
import { CiRepeat } from 'react-icons/ci'

const Player = () => {
  return (
    <div style={{ backgroundColor: '#242424' }}>
      <div className="d-flex justify-content-center pt-2">
        <a href="#">
          <CiShuffle style={{ fontSize: '40px', color: 'red' }} />
        </a>
        <a href="#">
          <MdOutlineSkipPrevious style={{ fontSize: '40px', color: 'red' }} />
        </a>
        <a href="#">
          <CiPlay1 style={{ fontSize: '40px', color: 'red' }} />
        </a>
        <a href="#">
          <MdOutlineSkipNext style={{ fontSize: '40px', color: 'red' }} />
        </a>
        <a href="#">
          <CiRepeat style={{ fontSize: '40px', color: 'red' }} />
        </a>
      </div>
    </div>
  )
}

export default Player
