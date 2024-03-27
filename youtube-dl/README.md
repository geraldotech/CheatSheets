# youtube-dl

Executar o comando dentro da pasta que contém `youtube-dl.exe`

`youtube-dl --list-formats https://www.youtube.com/watch?v=OM5tFl05zFE`

`youtube-dl -f 248 https://www.youtube.com/watch?v=OM5tFl05zFE`

# yt_dlp

> menos bugs

### list formats

yt-dlp -F
yt-dlp --list-formats

### download the format

yt-dlp --format "135"

manual:
https://www.mankier.com/1/yt-dlp

# ffmpeg how to merge

> Arquivo usado ffmpeg-N-101741-g8b2bde0494-win64-gpl-shared-vulkan.zip
> [https://drive.google.com/drive/folders/1CwwF2xrv6QTWoBc9xXa-B00A9gFb5J3p?usp=share_link](https://drive.google.com/drive/folders/1CwwF2xrv6QTWoBc9xXa-B00A9gFb5J3p?usp=share_link)

### merge audio and video

`ffmpeg -i "audio.m4a" -i "videeo.mp4" -c copy novo.mp4`

### webm to .mp3

ffmpeg.exe -i "Taylor Swift - Anti-Hero (ROCK VERSION) [8WDHrw1xVCU].webm" -acodec libmp3lame audio.mp3
