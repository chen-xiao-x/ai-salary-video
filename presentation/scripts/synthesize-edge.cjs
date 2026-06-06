const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PYTHON = 'C:/Users/陈晓晓/AppData/Local/Programs/Python/Python314/python.exe';
const VOICE = 'zh-CN-YunyangNeural';
const AUDIO_DIR = path.join(__dirname, '..', 'public', 'audio');
const SEGMENTS_FILE = path.join(__dirname, '..', 'audio-segments.json');

const segments = JSON.parse(fs.readFileSync(SEGMENTS_FILE, 'utf8'));
let done = 0, skipped = 0, failed = 0;

for (const seg of segments) {
  const outFile = path.join(AUDIO_DIR, seg.audio);
  const dir = path.dirname(outFile);

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  if (fs.existsSync(outFile)) {
    skipped++;
    continue;
  }

  process.stdout.write(`[${done + skipped + failed + 1}/${segments.length}] ${seg.audio} ... `);
  try {
    execSync(`"${PYTHON}" -m edge_tts --voice "${VOICE}" --text "${seg.text.replace(/"/g, '\\"')}" --write-media "${outFile}"`, {
      timeout: 30000,
      stdio: 'pipe'
    });
    const size = fs.statSync(outFile).size;
    console.log(`✓ ${(size / 1024).toFixed(0)}KB`);
    done++;
  } catch (e) {
    console.log('✗ FAILED');
    failed++;
  }
}

console.log(`\nDone: ${done} synthesized, ${skipped} skipped, ${failed} failed`);
