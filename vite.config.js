// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  define: {
    'process.env': {} // 환경변수 오류 방지
  },
  json: {
    stringify: true // JSON 파일을 문자열로 변환하여 가져옴
  }
});
