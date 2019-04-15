import React from 'react'
import styled from 'styled-components'

const Moment = () => {
  return (
    <MomentWrap>
      <div className="title">Moment</div>
      <ul className="moment-ul">
        <li className="moment-li">
          <div>献爱心鞍山西安市西安市西安市西安</div>
          <div className="img-wrap">
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
          </div>
          <div className="moment-time">2020-02-10 22:22:22</div>
        </li>
        <li className="moment-li">
          <div>献爱心鞍山西安市西安市西安市西安</div>
          <div className="img-wrap">
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
          </div>
          <div className="moment-time">2020-02-10 22:22:22</div>
        </li>
        <li className="moment-li">
          <div>献爱心鞍山西安市西安市西安市西安</div>
          <div className="img-wrap">
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
          </div>
          <div className="moment-time">2020-02-10 22:22:22</div>
        </li>
        <li className="moment-li">
          <div>献爱心鞍山西安市西安市西安市西安</div>
          <div className="img-wrap">
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
            <img src="https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg" alt=""/>
          </div>
          <div className="moment-time">2020-02-10 22:22:22</div>
        </li>
      </ul>
    </MomentWrap>
  )
}

const MomentWrap = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 15px;
  overflow: auto;
  .title {
    line-height: 30px;
    padding: 20px 0 10px;
    font-size: 20px;
    padding-left: 10px;
    font-weight: 800;
  }
  .moment-ul {
    margin-top 10px;
  }
  .moment-li {
    background: #fff;
    padding: 20px;
    line-height: 1.5;
    font-size: 14px;
    margin-bottom: 10px;
    border-radius: 5px;
    width: 560px;
  }
  .img-wrap {
    margin-top: 15px;
  }
  .img-wrap > img {
    height: 180px;
    width: 180px;
    margin-right: 5px;
  }
  .moment-time {
    text-align: right;
  }
`

export default Moment