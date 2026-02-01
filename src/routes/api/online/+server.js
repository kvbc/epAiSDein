export const config = {
  runtime: "nodejs20.x",
};

let clients = new Set();

function broadcast() {
  const data = `data: ${clients.size}\n\n`;
  for (const controller of clients) {
    try {
      controller.enqueue(data);
    } catch {
      clients.delete(controller);
    }
  }
}

export function GET() {
  const stream = new ReadableStream({
    start(controller) {
      clients.add(controller);
      broadcast();

      const interval = setInterval(() => {
        try {
          controller.enqueue(":\n\n"); // keep-alive
        } catch {
          cleanup();
        }
      }, 15000);

      function cleanup() {
        clearInterval(interval);
        clients.delete(controller);
        broadcast();
      }

      // 🔥 KLUCZOWE
      controller.signal?.addEventListener("abort", cleanup);
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
