describe('검색 모달 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  const KEYWORD = '테코톡';

  it('검색 키워드 제출 후, 데이터를 불러오기 전이면 skeleton UI가 화면에 표시된다.', () => {
    cy.get('#search-button').click();
    cy.get('#search-keyword-input').type(KEYWORD);
    cy.get('#search-keyword-form').submit();

    cy.get('#search-result-video-wrapper').should('have.class', 'skeleton');
    cy.get('.preview-container').each(($el) => cy.wrap($el).should('have.class', 'image'));
    cy.get('.video-title').each(($el) => cy.wrap($el).should('have.class', 'line'));
    cy.get('.channel-title').each(($el) => cy.wrap($el).should('have.class', 'line'));
    cy.get('.published-at').each(($el) => cy.wrap($el).should('have.class', 'line'));
  });
});
