#!/usr/bin/env bash
# edge-tts provider — free, no API key, supports Chinese
# Uses Microsoft Edge's TTS service via edge-tts Python package

PYTHON="C:/Users/陈晓晓/AppData/Local/Programs/Python/Python314/python.exe"
DEFAULT_VOICE="zh-CN-YunxiNeural"

tts_check() {
  if ! "$PYTHON" -c "import edge_tts" 2>/dev/null; then
    echo "edge-tts not installed. Run: pip install edge-tts" >&2
    return 1
  fi
}

tts_install_help() {
  echo "Install edge-tts:" >&2
  echo "  pip install edge-tts" >&2
  echo "" >&2
  echo "No API key needed. Free for all voices." >&2
  echo "Chinese voices: zh-CN-XiaoxiaoNeural, zh-CN-YunxiNeural, zh-CN-YunyangNeural" >&2
}

tts_synthesize() {
  local text="$1"
  local out="$2"
  local voice="${3:-$DEFAULT_VOICE}"

  # edge-tts outputs mp3 directly
  "$PYTHON" -m edge_tts --voice "$voice" --text "$text" --write-media "$out" 2>/dev/null
  return $?
}
