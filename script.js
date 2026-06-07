
document.getElementById('downloadBtn').addEventListener('click', () => {
  const csv = `Title,Writers,Publisher
Sample Song,John Doe,Example Publishing
Another Song,Jane Doe;Mark Smith,`;

  const blob = new Blob([csv], {type: 'text/csv'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'sample_catalog.csv';
  a.click();
});
