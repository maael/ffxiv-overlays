export default (base: string) => (
  `${!base.startsWith('http') && !base.startsWith('//') ? process.env.BACKEND_URL : ''}${base}`
);