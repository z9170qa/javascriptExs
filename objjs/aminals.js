// const animals = 
[
    'bennett',
    'snek',
    'slippery snek',
    'reptillian',
    'cat'
]
.filter(val => val.length < 9)
.map(v=>v[0].toUpperCase()+v.slice(1))
.map((v, i) => i ? ', ' + v : v)
.reduce((curr, prev) => curr + prev, 'Animals: ')
.concat('.');



