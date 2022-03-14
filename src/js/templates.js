import NotFoundImage from '../assets/images/not_found.png';
import { formatDate } from './utils';

const TEMPLATE = {
  MY_CLASSROOM: `
    <main id="app" class="classroom-container">
      <h1 class="classroom-container__title">👩🏻‍💻 나만의 유튜브 강의실 👨🏻‍💻</h1>
      <nav class="nav">
        <button id="search-modal-button" class="button nav__button">🔍 검색</button>
      </nav>
    </main>
  `,
  SEARCH_MODAL: `
    <div class="modal-container hide">
      <div class="dimmer"></div>
      <div class="search-modal" role="dialog" aria-labelledby="search-modal-title">
        <h2 id="search-modal-title" class="search-modal__title">🔍 보고싶은 영상 찾기 🔍</h2>
        <search-form></search-form>
        <search-result></search-result>
      </div>
    </div>
  `,
  SEARCH_FORM: `
    <form class="search-form">
      <h3 hidden>검색어 입력</h3>
      <input
        id="search-input-keyword"
        placeholder="검색"
        class="search-input__keyword"
        required
      />
      <button id="search-button" class="search-input__search-button button">검색</button>
    </form>
  `,
  SEARCH_RESULT: `
    <h3 hidden>검색 결과</h3>
    <ul is="video-list" class="video-list"></ul>
    <section class="search-result search-result--no-result hidden">
      <h3 hidden>검색 결과</h3>
      <div class="no-result">
        <img src=${NotFoundImage} alt="no result image" class="no-result__image">
        <p class="no-result__description">
          검색 결과가 없습니다<br />
          다른 키워드로 검색해보세요
        </p>
      </div>
    </section>
  `,
  generateVideoItem(video) {
    return `
      <li class="video-item" data-video-id="${video.id}">
        <img
          src="${decodeURI(video.thumbnail)}"
          alt="video-item-thumbnail" class="video-item__thumbnail">
        <h4 class="video-item__title">${decodeURI(video.title)}</h4>
        <p class="video-item__channel-name">${decodeURI(video.channelTitle)}</p>
        <p class="video-item__published-date">${formatDate(video.publishedAt)}</p>
        <button id="${video.id}-save-button" class="video-item__save-button button">⬇ 저장</button>
      </li>
    `;
  },
  SKELETON: `
    <div class="skeleton">
      <div class="image"></div>
      <h4 class="line"></h4>
      <p class="line"></p>
      <p class="line"></p>
      <button></button>
    </div>
  `,
};

export default TEMPLATE;
