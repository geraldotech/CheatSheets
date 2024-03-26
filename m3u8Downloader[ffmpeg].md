1 - install https://ffmpeg.org/download.html

```shell
ffmpeg -i "http://HOSTto.m3u8" -bsf:a aac_adtstoasc -vcodec copy -c copy -crf 50 file.mp4
```
