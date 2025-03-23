const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
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
            url: 'https://music-1258548228.cos.ap-beijing.myqcloud.com/music/%E4%BD%A0%E7%9A%84%E9%85%92%E9%A6%86%E5%AF%B9%E6%88%91%E6%89%93%E4%BA%86%E7%83%8A-%E9%99%88%E9%9B%AA%E5%87%9D.mp3',
            cover: 'https://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg',
            lrc: '/./dist/music/lrc/452986458.lrc',
            theme: '#46718b'
        },
        {
            name: '红昭愿',
            artist: '音阙诗听',
            url: 'https://lms-res.ouchn.cn/lms-media/outbound/60007018997.mp3',
            cover: 'https://p1.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg',
            theme: '#46718b'
        },
        {
            name: '绿色',
            artist: '陈雪凝',
            url: 'https://music-1258548228.cos.ap-beijing.myqcloud.com/music/%E7%BB%BF%E8%89%B2-%E9%99%88%E9%9B%AA%E5%87%9D.mp3',
            cover: 'https://p2.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg',
            theme: '#46718b'
        },
		{
            name: '起风了',
            artist: '买辣椒也用券',
            url: 'https://music-1258548228.cos.ap-beijing.myqcloud.com/music/%E8%B5%B7%E9%A3%8E%E4%BA%86-%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8.mp3',
            cover: 'https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
	        theme: '#46718b'
        },
        {
            name: '泼墨漓江',
            artist: '泠鸢yousa',
            url: 'https://music.163.com/song/media/outer/url?id=454905890.mp3',
            cover: 'https://p2.music.126.net/GULe52JbCtVW0vjXZ1o2yw==/109951162817808719.jpg',
            theme: '#46718b'
        }
    ]
});