const nameEl = document.getElementById('burning-name');
setInterval(() => {
  const intensity = Math.random() * 0.6 + 0.7;
  nameEl.style.opacity = intensity;
}, 150);

document.addEventListener('mousemove', (e) => {
  const trail = document.getElementById('cursor-trail');
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('load-about');
  const container = document.getElementById('about-container');

  btn.addEventListener('click', async () => {
    try {
      const response = await fetch('http://localhost:3001/api/about');

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      container.innerHTML = '';

      data.forEach(block => {
        const div = document.createElement('div');
        div.className = 'about-block';

        if (block.title) {
          const h3 = document.createElement('h3');
          h3.textContent = block.title;
          div.appendChild(h3);
        }

        const p = document.createElement('p');
        p.textContent = block.text;
        div.appendChild(p);

        container.appendChild(div);
      });

      btn.textContent = 'About Loaded!';
      btn.disabled = true;
    } catch (err) {
      console.error(err);
      container.innerHTML = '<p style="color: #8B0000;">Failed to load about info. Is the backend running?</p>';
    }
  });
});