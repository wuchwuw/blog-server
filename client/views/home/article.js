import React from 'react'
import styled from 'styled-components'
import Icon from '../../components/icon/icon'
import { withRouter } from 'react-router-dom'

const Article = (props) => {
  console.log(props)
  function goDetail () {
    props.history.push('/xxxxxxx')
  }
  return (
    <ArticleWrap>
      <div className="title">Blog Post / All</div>
      <ul className="article-ul">
        <li className="article-li" onClick={goDetail}>
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li><li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li><li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>

        <li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li><li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li><li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li><li className="article-li">
          <div className="article-title">VS Code的React JSX自动补全VS Code的React JSX自动补全VS Code的React JSX自动补全</div>
          <div className="article-tag"><span>2010-1-1 11:11:11</span><Icon icon="icon-html" height="14" width="16"></Icon></div>
        </li>
      </ul>
    </ArticleWrap>
  )
}

const ArticleWrap = styled.div`
  width: 400px;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
  }
  .title {
    line-height: 30px;
    padding: 20px 0 10px;
    font-size: 20px;
    padding-left: 15px;
    font-weight: 800;
  }
  .article-ul {
    margin-top: 10px;
    padding: 0 15px;
  }
  .article-li {
    background: #fff;
    padding: 10px;
    line-height: 1.5;
    font-size: 14px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all .3s
  }
  .article-li:hover {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .09)
  }
  .article-tag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    color: #999999;
    font-size: 14px;
  }
`

export default withRouter(Article)