window.addEventListener('load', () => {
    const tds = document.querySelectorAll('td')
    tds.forEach(item => {
        item.addEventListener('click', function () {
            this.style.background = '#000'
        })
    });
})


//  注释测试

