import { NextResponse } from "next/server";

export async function GET() {
    const res = {a: "a"}
    return NextResponse.json({data: res})


}