import styled from 'styled-components'
import { ReactComponent as Arrow } from 'assets/topArrow.svg'

export default function ScrollToTop() {
  const handleClick = () => {
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {!!window.scrollY && (
        <TopBtn>
          <Arrow onClick={handleClick} />
        </TopBtn>
      )}
    </>
  )
}

const TopBtn = styled.div`
  position: fixed;
  right: 90px;
  bottom: 50px;
  z-index: 1000;
  cursor: pointer;
  svg {
    width: 50px;
    height: 50px;
  }
`
