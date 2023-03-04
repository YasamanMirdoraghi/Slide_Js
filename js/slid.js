

  function __Slide(self){
    x = self.children
    x = x[0].getAttribute('src')
    document.querySelector('.box1>img').setAttribute('src', x)
}