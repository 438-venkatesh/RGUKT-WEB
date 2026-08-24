import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../public/disciplines');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  {
    name: 'cse.jpg',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    desc: 'Computer Science - Software code & computers'
  },
  {
    name: 'ece.jpg',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    desc: 'Electronics & Communication - Microchips & electronic components'
  },
  {
    name: 'eee.jpg',
    url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    desc: 'Electrical Engineering - Power grid wires & electricity'
  },
  {
    name: 'mech.jpg',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    desc: 'Mechanical Engineering - Mechanical robotics & machinery'
  },
  {
    name: 'civil.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    desc: 'Civil Engineering - Modern architectural construction & bridge'
  },
  {
    name: 'chem.jpg',
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
    desc: 'Chemical Engineering - Chemical laboratory glassware & reactions'
  },
  {
    name: 'mme.jpg',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    desc: 'Materials & Metallurgy - Metal welding, forging & metallurgy'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download: ${response.statusCode}`));
      }

      const fileStream = fs.createWriteStream(dest);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading high-definition discipline images...');
  for (const item of images) {
    const dest = path.join(targetDir, item.name);
    console.log(`Downloading ${item.name} (${item.desc})...`);
    try {
      await downloadFile(item.url, dest);
      const stats = fs.statSync(dest);
      console.log(`✓ Saved ${item.name} (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('All branch images downloaded successfully!');
}

run();
