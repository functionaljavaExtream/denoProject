import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGift } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <nav  className="site-header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1">
                        Netflix
                    </div>
                    <ul className="tabbed-primary-navigation">
                        <li className="navigation-tab">
                            <a className="current active" href="/browse">ホーム</a>
                        </li>
                        <li className="navigation-tab">
                            <a href="/browse/genre/83">TV番組・ドラマ</a>
                        </li>
                        <li className="navigation-tab">
                            <a href="/browse/genre/34399">映画</a>
                        </li>
                        <li className="navigation-tab">
                            <a href="/latest">新﻿着</a>
                        </li>
                        <li className="navigation-tab">
                            <a href="/browse/my-list">マイリスト</a>
                        </li>
                    </ul>


                    <div className="secondary-navigation">
                        <div className="nav-element">
                            <div className="searchBox">
                                <button className="searchTab" tabindex="0" aria-label="検索" data-uia="search-box-launcher">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                        <div className="nav-element">
                            <a href="/Kids">
                                キッズ
                            </a>
                        </div>
                        <div className="nav-element">
                            <a href="/Kids">
                                <FontAwesomeIcon icon={faGift} />
                            </a>
                        </div>




                    </div>
                </div>

            </div>

        </nav>
    );
};

export default Header;
