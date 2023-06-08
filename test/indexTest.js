const chai = require('chai');
chai.use(require('chai-dom'));
const { expect } = chai;

describe('index.html', () => {
  describe('the wrapper section', () => {
    it('has a <h1> element with the correct content', () => {
      const h1 = document.querySelector('h1');
      const hint = 'The <h1> should contain the text "Riyadh Blog"';

      expect(h1).to.exist;
      expect(h1).to.contain.text('Riyadh Blog', hint);
    });

    it('has a <h2> element with the correct content', () => {
      const h2 = document.querySelector('h2');
      const hint = 'The <h2> should contain the text "Where A Traditional Past Meets A Modern Future."';

      expect(h2).to.exist;
      expect(h2).to.contain.text('Where A Traditional Past Meets A Modern Future.', hint);
    });
  });

  describe('the content section', () => {
    it('has three <h3> elements with the correct content', () => {
      const h3Elements = document.querySelectorAll('h3');
      const hint = 'There should be three <h3> elements with the correct content';

      expect(h3Elements).to.have.lengthOf(3, hint);

      const expectedContent = ['Experience Riyadh', 'Discover Tradition', 'Embrace Modernity'];
      h3Elements.forEach((h3, index) => {
        expect(h3).to.contain.text(expectedContent[index]);
      });
    });

    it('has three <p> elements with the correct content', () => {
      const pElements = document.querySelectorAll('p');
      const hint = 'There should be three <p> elements with the correct content';

      expect(pElements).to.have.lengthOf(3, hint);

      const expectedContent = [
        'Discover the vibrant city of Riyadh, where history and culture come alive.',
        'Immerse yourself in the rich traditions of Saudi Arabia and its welcoming people.',
        'Experience the modern side of Riyadh with its impressive architecture and world-class amenities.',
      ];

      pElements.forEach((p, index) => {
        expect(p).to.contain.text(expectedContent[index]);
      });
    });

    it('has three <img> elements with the correct attributes', () => {
      const imgElements = document.querySelectorAll('img');
      const hint = 'There should be three <img> elements with the correct attributes';

      expect(imgElements).to.have.lengthOf(3, hint);

      imgElements.forEach((img) => {
        expect(img).to.have.attr('src');
        expect(img).to.have.attr('alt');
      });
    });

    it('has two <a> elements with the correct attributes', () => {
      const aElements = document.querySelectorAll('a');
      const hint = 'There should be two <a> elements with the correct attributes';

      expect(aElements).to.have.lengthOf(2, hint);

      aElements.forEach((a) => {
        expect(a).to.have.attr('href');
        expect(a).to.have.attr('target', '_blank');
      });
    });
  });
});
