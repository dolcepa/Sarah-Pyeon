declare module 'react-youtube' {
  import { Component } from 'react';

  export interface YouTubeProps {
    videoId?: string;
    id?: string;
    className?: string;
    containerClassName?: string;
    opts?: {
      height?: string | number;
      width?: string | number;
      playerVars?: {
        autoplay?: 0 | 1;
        cc_lang_pref?: string;
        cc_load_policy?: 0 | 1;
        color?: 'red' | 'white';
        controls?: 0 | 1;
        disablekb?: 0 | 1;
        enablejsapi?: 0 | 1;
        end?: number;
        fs?: 0 | 1;
        hl?: string;
        iv_load_policy?: 1 | 3;
        list?: string;
        listType?: 'playlist' | 'user_uploads' | 'search';
        loop?: 0 | 1;
        modestbranding?: 0 | 1;
        origin?: string;
        playlist?: string;
        playsinline?: 0 | 1;
        rel?: 0 | 1;
        showinfo?: 0 | 1;
        start?: number;
        mute?: 0 | 1;
      };
    };
    onReady?: (event: { target: any }) => void;
    onError?: (event: { target: any; data: number }) => void;
    onPlay?: (event: { target: any; data: number }) => void;
    onPause?: (event: { target: any; data: number }) => void;
    onEnd?: (event: { target: any; data: number }) => void;
    onStateChange?: (event: { target: any; data: number }) => void;
    onPlaybackRateChange?: (event: { target: any; data: number }) => void;
    onPlaybackQualityChange?: (event: { target: any; data: string }) => void;
  }

  export default class YouTube extends Component<YouTubeProps> {}
}

