import React, { useState } from "react";

function MusicList({ musicList }) {
    return (
        <>
        {musicList.map((music) =>
            <div>{music.title} ({music.singer})</div>
        )}
        </>
    )
}

export default MusicList;