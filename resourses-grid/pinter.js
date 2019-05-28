const gridStyles = getComputedStyle(document.querySelector('.container'));
const rowHeight = parseInt(gridStyles.getPropertyValue('--grid-row-height'));
const gap = parseInt(gridStyles.getPropertyValue('--grid-gutter'));

let makeGrid = function() {
  let items = document.querySelectorAll('.container div');
  for (let i = 0, item; item = items[i]; i++) {
    item.classList.remove('grid-item-ready');
    let height = item.getElementsByTagName('img')[0].offsetHeight + item.getElementsByTagName('p')[0].offsetHeight;
    let rowSpan = Math.ceil((height)/(rowHeight));
    item.style.gridRowEnd = 'span ' + rowSpan;
    item.classList.add('grid-item-ready');
  }
}

window.addEventListener('load', makeGrid);
window.addEventListener('resize', () => {
  clearTimeout(makeGrid.resizeTimer);
  makeGrid.resizeTimer = setTimeout(makeGrid, 50);
});
