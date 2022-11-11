import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from 'assets/topArrow.svg'

export default function ScrollToTop() {
  const [ScrollY, setScrollY] = useState(0)
  const [topBtnStatus, setTopBtnStatus] = useState(false)
  const handleFollow = () => {
    setScrollY(window.scrollY) // window 스크롤 값을 ScrollY에 저장
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setTopBtnStatus(true)
    } else {
      // 100 이하면 버튼이 사라지게
      setTopBtnStatus(false)
    }
  }
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
      <button
        className={topBtnStatus ? 'topBtn active' : 'TopBtn'} // 버튼 노출 여부
        onClick={handleTop} // 버튼 클릭시 함수 호출
      />
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
