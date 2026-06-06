const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PYTHON = 'C:/Users/陈晓晓/AppData/Local/Programs/Python/Python314/python.exe';
const VOICE = 'zh-CN-YunxiNeural';
const AUDIO_DIR = path.join(__dirname, '..', 'public', 'audio');
const segs = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'audio-segments.json'), 'utf8'));

const failed = segs.filter(s => !fs.existsSync(path.join(AUDIO_DIR, s.audio)));
console.log('Retrying', failed.length, 'failed segments...');

for (const seg of failed) {
  const out = path.join(AUDIO_DIR, seg.audio);
  const dir = path.dirname(out);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const cleanText = seg.text.replace(/[「」]/g, ',').replace(/[“”]/g, ',');
  const escapedText = cleanText.replace(/"/g, '\\"');

  process.stdout.write(seg.audio + ' ... ');
  try {
    execSync(`"${PYTHON}" -m edge_tts --voice "${VOICE}" --text "${escapedText}" --write-media "${out}"`, {
      timeout: 30000,
      stdio: 'pipe'
    });
    console.log('OK', (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
  } catch (e) {
    console.log('FAIL');
  }
}

const total = segs.length;
const done = segs.filter(s => fs.existsSync(path.join(AUDIO_DIR, s.audio))).length;
console.log(`\nTotal: ${done}/${total} segments have audio`);
