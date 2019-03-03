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
            name: '红昭愿',
            artist: '音阙诗听',
            url: 'http://music.163.com/song/media/outer/url?id=452986458.mp3',
            cover: 'http://p2.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg',
            lrc: '/./dist/music/lrc/452986458.lrc',
            theme: '#46718b'
        },
        {
            name: '云烟成雨',
            artist: '房东的猫',
            url: 'http://music.163.com/song/media/outer/url?id=513360721.mp3',
            cover: 'http://p1.music.126.net/DSTg1dR7yKsyGq4IK3NL8A==/109951163046050093.jpg',
            theme: '#46718b'
        },
        {
            name: '某愿片尾曲',
            artist: '草东没有派对',
            url: 'http://music.163.com/song/media/outer/url?id=2059638885.mp3',
            cover: 'http://p1.music.126.net/QMQigidlCS2KYTUOb9I0yg==/109951163879096283.jpg',
            theme: '#46718b'
        },
		{
            name: '起风了',
            artist: '买辣椒也用券',
            url: 'http://sc1.111ttt.cn/2018/1/03/13/396131213056.mp3',
            cover: 'http://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
            lrc: '/./dist/music/lrc/449818741.lrc',
	    theme: '#46718b'
        }
    ]
});