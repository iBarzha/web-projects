const img = document.querySelector('img');

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

img.style.display = "none";

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        img.style.display = "inline";
        img.src = `assets/${sound}.jpg`

        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}