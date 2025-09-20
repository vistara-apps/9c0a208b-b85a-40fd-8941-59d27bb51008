import { useState, useRef, useEffect, useCallback } from 'react';

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isLoading: boolean;
  error: string | null;
}

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    isLoading: false,
    error: null,
  });

  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = state.volume;

      // Event listeners
      audioRef.current.addEventListener('loadedmetadata', () => {
        setState(prev => ({
          ...prev,
          duration: audioRef.current?.duration || 0,
          isLoading: false,
        }));
      });

      audioRef.current.addEventListener('timeupdate', () => {
        setState(prev => ({
          ...prev,
          currentTime: audioRef.current?.currentTime || 0,
        }));
      });

      audioRef.current.addEventListener('ended', () => {
        setState(prev => ({
          ...prev,
          isPlaying: false,
          currentTime: 0,
        }));
      });

      audioRef.current.addEventListener('error', (e) => {
        setState(prev => ({
          ...prev,
          error: 'Failed to load audio',
          isLoading: false,
        }));
      });

      audioRef.current.addEventListener('loadstart', () => {
        setState(prev => ({
          ...prev,
          isLoading: true,
          error: null,
        }));
      });

      audioRef.current.addEventListener('canplay', () => {
        setState(prev => ({
          ...prev,
          isLoading: false,
        }));
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const loadTrack = useCallback((url: string) => {
    if (!audioRef.current) return;

    setState(prev => ({ ...prev, isLoading: true, error: null }));
    audioRef.current!.src = url;
    audioRef.current!.load();
  }, []);

  const play = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setState(prev => ({ ...prev, isPlaying: true }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'Failed to play audio',
        isPlaying: false,
      }));
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;
    setState(prev => ({ ...prev, currentTime: time }));
  }, []);

  const setVolume = useCallback((volume: number) => {
    if (!audioRef.current) return;

    const clampedVolume = Math.max(0, Math.min(1, volume));
    audioRef.current.volume = clampedVolume;
    setState(prev => ({ ...prev, volume: clampedVolume }));
  }, []);

  const togglePlayPause = useCallback(() => {
    if (state.isPlaying) {
      pause();
    } else {
      play();
    }
  }, [state.isPlaying, play, pause]);

  return {
    ...state,
    loadTrack,
    play,
    pause,
    seek,
    setVolume,
    togglePlayPause,
  };
};

