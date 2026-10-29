export default async (request) => {
  const url = new URL(request.url);
  const marker = '/.netlify/functions/openalex/';
  let path = url.pathname.includes(marker) ? url.pathname.split(marker)[1] : '';
  if (!path && url.pathname.includes('/api/openalex/')) path = url.pathname.split('/api/openalex/')[1];
  if (!/^works$|^authors\/A\d+$/.test(path)) {
    return Response.json({error:'Invalid OpenAlex endpoint'}, {status:404});
  }
  const target = new URL('https://api.openalex.org/' + path);
  for (const [key, value] of url.searchParams) {
    if (['search','filter','sort','per_page','select','api_key','page'].includes(key)) target.searchParams.append(key,value);
  }
  try {
    const response = await fetch(target, {headers:{Accept:'application/json'},signal:AbortSignal.timeout(25000)});
    const body = await response.text();
    return new Response(body,{status:response.status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
  } catch (error) {
    return Response.json({error:'OpenAlex upstream error',message:String(error?.message||error)},{status:502});
  }
};
export const config = { path: '/api/openalex/*' };
