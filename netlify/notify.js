"use strict";
import "dotenv/config";
import { Expo } from "expo-server-sdk";

let expo = new Expo({ accessToken: process.env.PUSH_NOTIFICATION_SECRET });

export async function handler(event, context) {
  if (event.httpMethod === "POST") {
    const Parameters = event.queryStringParameters
      ? event.queryStringParameters
      : null;
    const Data = event.body ? JSON.parse(event.body) : null; //sanitation

    if (!Data || !Parameters)
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Error with request" }),
      };
    try {
      await expo.sendPushNotificationsAsync([
        {
          to: `${Parameters.token}`,
          sound: "default",
          _contentAvailable: true,
          mutableContent: true,
          // title: "Blitz Wallet",
          // body: `Caught incoming payment`,
          data: Data,
        },
      ]);
      return {
        statusCode: 200,
        body: JSON.stringify({ error: "Working" }),
      };
    } catch (err) {
      console.log(err);
      return {
        statusCode: 200,
        body: JSON.stringify({ error: "Error" }),
      };
    }
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Must be a post request" }),
    };
  }
}
