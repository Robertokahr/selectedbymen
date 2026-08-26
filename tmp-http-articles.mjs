const files = [
  '/posts/grooming.jpg',
  '/posts/style.jpg',
  '/posts/tech.jpg',
  '/products/razor.jpg',
  '/products/shaving-brush.jpg',
  '/products/moisturizer.jpg',
  '/products/headphones.jpg',
  '/products/powerbank.jpg',
  '/products/kindle.jpg',
  '/products/sneakers.jpg',
  '/products/sweater.jpg',
  '/products/belt.jpg',
];

for (const path of files) {
  const res = await fetch('http://127.0.0.1:4322' + path);
  const buf = Buffer.from(await res.arrayBuffer());
  const jpeg = buf[0] === 0xff && buf[1] === 0xd8;
  console.log(res.status, jpeg ? 'JPEG' : 'NOT_JPEG', buf.length, path);
}

const asins = [
  'B002A8JO1Q',
  'B00C7R4Y7A',
  'B00TTD9BRC',
  'B09XS7JWHH',
  'B0B7BQZTZF',
  'B0C23P6N2P',
  'B094DVTP5F',
  'B0G33NS6ZV',
  'B00TI01HWI',
];

for (const asin of asins) {
  const url = `https://www.amazon.com/dp/${asin}`;
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        accept: 'text/html',
      },
    });
    const text = await res.text();
    const title = (text.match(/<title>([^<]+)<\/title>/i) || [])[1] || '';
    const dead =
      /page not found|sorry, we couldn't find|dog of amazon|looking for something/i.test(
        text,
      );
    console.log(
      res.status,
      dead ? 'DEAD' : 'OK',
      asin,
      title.slice(0, 80).replace(/\s+/g, ' '),
    );
  } catch (err) {
    console.log('ERR', asin, err.message);
  }
}
