import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export function POST(request: NextRequest, { params }: { params: { eventId: string } }) {
    // revalidateTag: Renova todos os caches relacionados a uma tag (revalidação sob demanda)
    revalidateTag('events');
    revalidateTag(`events/${params.eventId}`)
    return new Response(null, {status: 204});
}