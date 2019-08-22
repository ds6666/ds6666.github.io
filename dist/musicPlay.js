const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: true,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.4,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '你的酒馆对我打了烊',
            artist: '陈雪凝',
            url: 'http://music.163.com/song/media/outer/url?id=1341964346.mp3',
            cover: 'http://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg',
            lrc: '/./dist/music/lrc/452986458.lrc',
            theme: '#46718b'
        },
        {
            name: '红昭愿',
            artist: '音阙诗听',
            url: 'http://music.163.com/song/media/outer/url?id=452986458.mp3',
            cover: 'http://p1.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg',
            theme: '#46718b'
        },
        {
            name: '绿色',
            artist: '陈雪凝',
            url: 'http://music.163.com/song/media/outer/url?id=1345848098.mp3',
            cover: 'http://p2.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg',
            theme: '#46718b'
        },
		{
            name: '起风了',
            artist: '买辣椒也用券',
            url: 'http://sc1.111ttt.cn/2018/1/03/13/396131213056.mp3',
            cover: 'http://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
	        theme: '#46718b'
        },
        {
            name: '两两相忘',
            artist: '曲肖冰',
            url: 'http://fs.open.kugou.com/f65506688492ddf79467527889285454/5d5e1e22/G156/M0B/08/19/3A0DAFyn_bCAXUspAC9hjdWSpsk161.mp3',
            cover: 'http://p1.music.126.net/5F-eackmyizq4kAt7SEBuQ==/109951163975909720.jpg',
            theme: '#46718b'
        }
    ]
});