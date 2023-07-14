import db from "@lib/db";
import User from "@models/User";
import Transaction from "@models/Transaction";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await db();

    const { account, key, Total, recieverAccount, tranId } = await req.json();
    let user = await User.findOne({ account });

    let ecom = await User.findOne({ account: recieverAccount });

    console.log(user);
    console.log(key);

    if (!user) {
      return new NextResponse(JSON.stringify({ data: "Invalid credentials" }), {
        status: 401,
      });
    }

    if (user.key !== key) {
      return new NextResponse(JSON.stringify({ data: "Wrong credentials" }), {
        status: 401,
      });
    }
    let bal = parseInt(user.balance);
    let temp = parseInt(Total);
    if (bal < temp) {
      return new NextResponse(JSON.stringify({ data: "Insufficient funds" }), {
        status: 401,
      });
    }

    user.balance = bal - temp;
    ecom.balance = parseInt(ecom.balance) + temp;

    const transaction = new Transaction({
      amount: temp,
      senderName: user.name,
      senderId: user._id,
      receiverName: ecom.name,
      receiverId: ecom._id,
      tranId: tranId,
    });

    await user.save();
    await ecom.save();
    await transaction.save();

    return new NextResponse(JSON.stringify({ data: "Success" }), {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err, { status: 500 });
  }
};
