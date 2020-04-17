// JSON: JavaScript Object Notation (Data Receiving Format)
var singer = {
    name: "여자친구",
    members: ["신비","유주","소원","엄지","예린","은하"],
    songs: {
        song: [
            {
                title: "너 그리고 나",
                year: 2016
            },
            {
                title: "시간을 달려서",
                year: 2015
            }
        ]
    }
}
// Type: Object
// to String? -> JSON.stringify()
// to Object? -> JSON.parse()

var str = JSON.stringify(singer);
console.log(str, typeof str);

var parsed = JSON.parse(str);
console.log(parsed, typeof parsed);

console.log(parsed.songs.song[0].title) // 너 그리고 나