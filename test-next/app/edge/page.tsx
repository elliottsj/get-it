export const runtime = 'edge'

export default async function EdgePage() {
  const timestamp = (
    await fetch('https://apicdn.sanity.io', {next: {tags: [runtime]}})
  ).headers.get('date')
  return <p id="edge">{timestamp}</p>
}
