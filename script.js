// Dynamic Publications Loader
fetch('publications.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('pub-list');
    data.forEach(pub => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${pub.title}</strong><br>
        <em>${pub.authors}</em><br>
        <span>${pub.journal}</span><br>
        <a href="${pub.link}" target="_blank">Read More</a>
      `;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error loading publications:', error);
  });

