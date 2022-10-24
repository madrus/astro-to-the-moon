const get = async path => {
  const fetchResult = await fetch(path, {
    headers: { 'User-Agent': 'firefox' },
  })

  const json = await fetchResult.json()
  return json
}

// TODO: add your real API endpoint calls using 'get', e.g.
// export const getStory = (id: string): any =>
//   get(`https:// whatever-your-endpoint.is/${id}`)
