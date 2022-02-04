const ghpages = require('gh-pages');

ghpages.publish(
  '.',
  {
    src: ['*.html', '*.css','*.png'],
  },
  (result) => {
    if (result) {
      console.log('🚀 ~ file: publish.js ~ line 10 ~ result', result);
    } else {
      console.log('Done');
    }
  }
);
