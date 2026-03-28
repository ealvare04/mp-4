import {NextResponse} from "next/server";

export const dyn = "force-dynamic"

const SUPERHERO_API_KEY = process.env.SUPERHERO_API_KEY;

export async function GET(request:Request): Promise<NextResponse> {
    const {searchParams} = new URL(request.url);

    const name = searchParams.get("name");

    if (!name) {
        return NextResponse.json({error: "No [name] provided"}, {status:400});
    }

    const res = await fetch(
        `https://superheroapi.com/api/${SUPERHERO_API_KEY}/search/${name}` // encode spider man -> spider%20man
    );

    // api request failed
    if (res.status != 200) {
        return NextResponse.json({error: "API fetch failed"}, {status:500});
    }

    const data = await res.json();

    return NextResponse.json(data);
}