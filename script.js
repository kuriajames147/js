function changeText() {
    const textElement = document.getElementById('text');
    textElement.textContent = 'All the change happens here. This is the real deal';
  }
  
  function changeStyle() {
    const title = document.getElementById('main-title');
    title.style.color = 'blue';
    title.style.fontSize = '2.5rem';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.backgroundColor = 'lightyellow';
    title.style.textAlign = 'center';
    
  }
  
  function toggleElement() {
    const extraContent = document.getElementById('extra-content');
    if (extraContent.style.display === 'none') {
      extraContent.style.display = 'block';
    } else {
      extraContent.style.display = 'none';
    }
  }
  