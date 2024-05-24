function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parent.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    //parentSelector.insertAdjacentHTML("beforeend", clone);
    // parentSelector.insertAdjacentHTML("beforeend", clone);

    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }

  //after window is completed load
  //1 class selector for marquee
  //2 marquee speed 0.2
  window.addEventListener("load", Marquee(".textlearnmore", 1.2));

  let wts1 = document.querySelector('.wts1');
  let wts2 = document.querySelector('.wts2');
  let kerangbulet = document.querySelector('.kerangbulet');
  let lodehbulet = document.querySelector('.lodehbulet');
  let kerangpanci = document.querySelector('.kerangpanci');
  let ikankuning = document.querySelector('.ikankuning');
  window.addEventListener('scroll',function(){
    let value = window.scrollY;
    wts1.style.top = (1500) - value*0.3 + 'px';
    wts2.style.top = -2000 + (value*0.6) + 'px';
    kerangbulet.style.top = (800) - value*0.3 + 'px';
    lodehbulet.style.top = -100 + (value*0.2) + 'px';
    kerangpanci.style.top = (650) - value*0.3 + 'px';
    ikankuning.style.top = -90 + (value*0.1) + 'px';
  })
