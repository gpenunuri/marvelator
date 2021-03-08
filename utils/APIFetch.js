import MD5 from "crypto-js/md5";

export async function APIFetch(endpoint) {
  try {
    const ts = new Date().getTime();
    const hash = MD5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);
    const url = `${process.env.API_ENDPOINT}${endpoint}&ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`;

    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
}
