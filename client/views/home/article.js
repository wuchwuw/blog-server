import React from 'react'
import styled from 'styled-components'
import Icon from '../../components/icon/icon'

const Article = () => {
  return (
    <ArticleWrap>
      <div className="title">Blog Post / All</div>
      <ul className="article-ul">
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
  margin-left: 15px;
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
    padding-left: 10px;
    font-weight: 800;
  }
  .article-ul {
    margin-top 10px;
  }
  .article-li {
    background: #fff;
    padding: 10px;
    line-height: 1.5;
    font-size: 14px;
    margin-bottom: 10px;
    cursor: pointer;
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

export default Article