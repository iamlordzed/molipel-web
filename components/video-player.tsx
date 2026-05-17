"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VideoPlayerProps {
  src: string
}

export function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const volumeRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const [showVolume, setShowVolume] = useState(false)
  const hideVolumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const handleVolumeEnter = useCallback(() => {
    if (hideVolumeTimeout.current) {
      clearTimeout(hideVolumeTimeout.current)
      hideVolumeTimeout.current = null
    }
    setShowVolume(true)
  }, [])

  const handleVolumeLeave = useCallback(() => {
    hideVolumeTimeout.current = setTimeout(() => {
      setShowVolume(false)
    }, 300)
  }, [])

  const handleVolumeChange = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current
    const bar = volumeRef.current
    if (!v || !bar) return
    const rect = bar.getBoundingClientRect()
    // Bottom = 0, top = 1
    const ratio = Math.max(0, Math.min(1, (rect.bottom - e.clientY) / rect.height))
    v.volume = ratio
    setVolume(ratio)
    if (ratio === 0) {
      v.muted = true
      setMuted(true)
    } else if (v.muted) {
      v.muted = false
      setMuted(false)
    }
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onTime = () => {
      if (v.duration) setProgress((v.currentTime / v.duration) * 100)
    }
    const onEnded = () => {
      setPlaying(false)
      setProgress(0)
    }
    v.addEventListener("timeupdate", onTime)
    v.addEventListener("ended", onEnded)
    return () => {
      v.removeEventListener("timeupdate", onTime)
      v.removeEventListener("ended", onEnded)
    }
  }, [])

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const v = videoRef.current
    const bar = progressRef.current
    if (!v || !bar) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    v.currentTime = ratio * v.duration
    setProgress(ratio * 100)
  }

  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-border bg-card">
      <video
        key={src}
        ref={videoRef}
        preload="metadata"
        playsInline
        muted={muted}
        onClick={togglePlay}
        className="size-full cursor-pointer object-cover"
      >
        <source src={`${src}#t=0.001`} type="video/mp4" />
      </video>

      {/* Play overlay when paused */}
      {!playing && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20"
          aria-label="Reproducir"
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground">
            <Play className="ml-0.5 size-5" />
          </div>
        </button>
      )}

      {/* Bottom controls bar */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-black/50 px-2 py-1.5 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          onClick={togglePlay}
          className="shrink-0 text-white"
          aria-label={playing ? "Pausar" : "Reproducir"}
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>

        {/* Progress bar */}
        <div
          ref={progressRef}
          onClick={seek}
          className="relative h-1 flex-1 cursor-pointer rounded-full bg-white/30"
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Volume control with vertical slider on hover */}
        <div
          className="relative shrink-0"
          onMouseEnter={handleVolumeEnter}
          onMouseLeave={handleVolumeLeave}
        >
          {/* Vertical volume slider */}
          {showVolume && (
            <div className="absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 flex-col items-center rounded bg-black/70 p-1.5">
              <div
                ref={volumeRef}
                onClick={handleVolumeChange}
                className="relative h-20 w-1.5 cursor-pointer rounded-full bg-white/30"
              >
                <div
                  className="absolute inset-x-0 bottom-0 rounded-full bg-white"
                  style={{ height: `${muted ? 0 : volume * 100}%` }}
                />
                <div
                  className="absolute left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-white"
                  style={{ bottom: `calc(${muted ? 0 : volume * 100}% - 5px)` }}
                />
              </div>
            </div>
          )}

          <button
            onClick={toggleMute}
            className="text-white"
            aria-label={muted ? "Activar sonido" : "Silenciar"}
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}