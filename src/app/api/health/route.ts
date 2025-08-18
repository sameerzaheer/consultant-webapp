export async function GET() {
  return Response.json({ ok: true, deployedAt: new Date().toISOString() });
}
