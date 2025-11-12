export async function onRequest({ request }) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get("url");

  if (!target) {
    return new Response("URLが指定されていません", { status: 400 });
  }

  try {
    const response = await fetch(target);
    const html = await response.text();

    const fixedHtml = html
      .replace(/(href|src)="(?!https?:\/\/)([^"]+)"/g, (m, attr, path) =>
        `${attr}="${new URL(path, target).href}"`
      )
      .replace(/type="module"/g, 'type="text/javascript"');

    return new Response(fixedHtml, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Frame-Options": "SAMEORIGIN"
      }
    });
  } catch (e) {
    return new Response("取得エラー: " + e.message, { status: 500 });
  }
}
