document.addEventListener('mousemove', function(e) {
    const tracer = document.createElement('div');
    tracer.className = 'tracer';
    document.body.appendChild(tracer);
    tracer.style.left = e.pageX + 'px';
    tracer.style.top = e.pageY + 'px';
    
    setTimeout(() => {
        tracer.style.opacity = '0';
    }, 0);
    
    setTimeout(() => {
        tracer.remove();
    }, 500);
    });