export const config = {
  runtime: "nodejs",
};

let clients = new Set()
let online = 0

function broadcast() {
  const msg = `data: ${online}\n\n`

  for (const controller of clients) {
    try {
      controller.enqueue(msg)
    } catch (err) {
      // controller martwy → usuwamy
      clients.delete(controller)
    }
  }
}

export function GET() {
  return new Response(
    new ReadableStream({
      start(controller) {
        clients.add(controller)
        online++
        broadcast()
      },

      cancel(controller) {
        clients.delete(controller)
        online--
        broadcast()
      }
    }),
    {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      }
    }
  )
}
