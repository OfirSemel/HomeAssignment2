
const style = document.createElement('style');

style.textContent = 
`
  nav ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: #ff66c4;
    left: 0;
    bottom: -5px;
    transition: width .3s;
  }

  nav ul li a:hover::after {
    width: 100%;
  }

  nav ul li a {
    position: relative;
  }
`;

document.head.appendChild(style);
