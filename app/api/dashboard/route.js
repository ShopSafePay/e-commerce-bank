import { NextResponse } from "next/server";
import db from "@/lib/db";
import User from "@/models/User";
import Transaction from "@models/Transaction";

export const GET = async (req) => {
  const url = new URL(req.url);

  const id = url.searchParams.get("id");
  console.log(id);

  try {
    await db();

    const user = await User.findOne({ _id: id });
    console.log(user);
   
    const transactions = await Transaction.find({$or: [{senderId: id}, {receiverId: id}]});
    console.log(transactions);
    return new NextResponse(JSON.stringify({usr:user,transactions:transactions}), { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
