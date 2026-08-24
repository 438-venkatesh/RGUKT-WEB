import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, 'public/gallery');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToDownload = [
  {
    filename: 'quantum-research-thrust.jpg',
    url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85',
    desc: 'Quantum computing and scientific algorithms research',
  },
  {
    filename: 'summer-programmes-hero.jpg',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
    desc: 'Students collaborating in technical summer internship workshops',
  },
  {
    filename: 'academic-regulations-hero.jpg',
    url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85',
    desc: 'Academic governance, regulations and degree criteria',
  },
  {
    filename: 'academic-calendar-hero.jpg',
    url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=85',
    desc: 'Academic calendar, semester almanac and planning',
  },
  {
    filename: 'academic-curriculum-hero.jpg',
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
    desc: 'Engineering curriculum and modern university classroom learning',
  },
  {
    filename: 'examination-procedures-hero.jpg',
    url: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=85',
    desc: 'University examination hall with proctored students writing exams',
  },
  {
    filename: 'examination-schedules-hero.jpg',
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=85',
    desc: 'Examination schedules, timetable planning and study desk',
  },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading HD topic-accurate academic images...');
  for (const img of imagesToDownload) {
    const destPath = path.join(targetDir, img.filename);
    console.log(`Downloading ${img.filename} (${img.desc})...`);
    await downloadFile(img.url, destPath);
    console.log(`Saved: ${destPath}`);
  }
  console.log('All HD images downloaded successfully!');
}

main().catch(console.error);
